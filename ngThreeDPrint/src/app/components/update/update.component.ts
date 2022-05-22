import { AppToastService } from './../../services/app-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreeDService } from 'src/app/services/three-d.service';
import { ThreeDPrint } from './../../models/three-dprint';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private printSvc: ThreeDService,
    private route: ActivatedRoute,
    private toast: AppToastService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      console.log(id);
      if (id && id != 'create') {
        this.updatePrintId = parseInt(id);
        this.displayPrint(parseInt(id));
      }
    } else {
      this.createMode = true;
      this.threeDPrint = new ThreeDPrint();
    }
  }

  threeDPrint: ThreeDPrint = new ThreeDPrint();
  updatePrintId: number | null = null;
  createMode: boolean= false;

  update(print: ThreeDPrint) {
    if (this.updatePrintId) {
      this.printSvc.update(this.updatePrintId, print).subscribe(
        success => {
          this.toast.show('', 'Print successfully updated 🤩');
          this.router.navigateByUrl('/home');
        },
        err => {
          this.toast.show('', 'Print failed to update 😕');
          this.router.navigateByUrl('/home');
          console.log('Ovservable got and error' + err)
        }
      );
    }
  }

  displayPrint(id: number) {
    this.printSvc.show(id).subscribe(
      success => {
        this.threeDPrint = Object.assign({}, success);
        if (! this.threeDPrint) {
          this.router.navigateByUrl('/notFound');
        }
      },
      err => this.router.navigateByUrl('/notFound')
    )
  }

  addPrint(print: ThreeDPrint){
    this.printSvc.create(print).subscribe(
      success => {
        this.toast.show('', 'Print successfully created 🤩');
        this.router.navigateByUrl('/home' );
      },
      err => {
        this.toast.show('', 'Failed to Create print 😕');
        this.router.navigateByUrl('/home');
        console.log('Ovservable got and error' + err);
      }
    );
  }



}
