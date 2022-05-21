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
              private router:Router
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

  displayPrint(id: number) {
    this.threeDPrintSerivce.show(id).subscribe(
      success => {
        this.threeDPrint = success;
        if (! this.threeDPrint) {
          this.router.navigateByUrl('/notFound');
        }
      },
      err => this.router.navigateByUrl('/notFound')
    );
  }

}
