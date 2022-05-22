import { AppToastService, ToastInfo } from './../../services/app-toast.service';
import { MatRippleModule } from '@angular/material/core';
import { ThreeDPrint } from './../../models/three-dprint';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreeDService } from 'src/app/services/three-d.service';

@Component({
  selector: 'app-single-print',
  templateUrl: './single-print.component.html',
  styleUrls: ['./single-print.component.css']
})
export class SinglePrintComponent implements OnInit {

  constructor(private threeDPrintSerivce: ThreeDService,
              private route: ActivatedRoute,
              private router:Router,
              private toast: AppToastService
              ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.displayPrint(parseInt(id));
      }
    }
  }

  threeDPrint: ThreeDPrint | null = null;
  displayedColumns: string[] = ['title', 'value'];
  printDetails: boolean = true;
  filamentDetails: boolean = false;
  edit: boolean = false;



  displaySelector(display: string) {
    if (display === 'print') {
      this.printDetails = true;
      this.filamentDetails = false;
      this.edit = false;
    } else if (display === 'edit') {
      this.edit = true;
      this.printDetails = false;
      this.filamentDetails = false;
    } else {
      this.filamentDetails = true;
      this.printDetails = false;
      this.edit = false;
    }

  }

  getPrinterInfo(print: ThreeDPrint): {}[] {
    let printerInfo: {}[] = [];
    if (print.printQuality) {
      printerInfo.push({title: 'Quality: ', value: print.printQuality });
    }
    if (print.printSpeed) {
      printerInfo.push({title: 'Speed: ', value: print.printSpeed });
    }
    if (print.printTemp) {
      printerInfo.push({title: 'Temp: ', value: print.printTemp });
    }
    if (print.adhesionLayer) {
      printerInfo.push({title: 'Adhesion: ', value: print.adhesionLayer });
    }
    if (print.supports) {
      printerInfo.push({title: 'Supports: ', value: 'Yes' });
    } else {
      printerInfo.push({title: 'Supports: ', value: 'None' });
    }

    return printerInfo;
  }

  getFilamentInfo(print: ThreeDPrint): {}[] {
    let filamentInfo: {}[] = [];
    if (print.filamentBrand) {
      filamentInfo.push({title: 'Brand: ', value: print.filamentBrand });
    }
    if (print.filamentType) {
      filamentInfo.push({title: 'Type: ', value: print.filamentType });
    }


    return filamentInfo;
  }

  displayPrint(id: number) {
    this.threeDPrintSerivce.show(id).subscribe(
      success => {
        this.threeDPrint = success;
        if (! this.threeDPrint) {
          this.router.navigateByUrl('/notFound');
        }
      },
      err => this.router.navigateByUrl('/notFound')
    )
  }

  setPrintImage(print: ThreeDPrint) {
    if (print.printImageUrl) {
      return print.printImageUrl;
    } else {
      return 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?'
    }
  }

  removePrint(id: number, body: string) {

    this.threeDPrintSerivce.destroy(id).subscribe(
      success => {
        this.toast.show('', body);
        this.router.navigateByUrl('/home');
      },
      err => {
          this.toast.show('', 'Print Failed to delete 🥲');
          console.log('Ovservable got and error' + err);
        }
      );
  }

  update(print: ThreeDPrint | null) {
    console.log(print);
  }





}
