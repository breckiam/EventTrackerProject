import { AppToastService, ToastInfo } from './../../services/app-toast.service';
import { ThreeDPrint } from './../../models/three-dprint';

import { Component, OnInit } from '@angular/core';
import { ThreeDService } from 'src/app/services/three-d.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private threeDPrintSvc: ThreeDService, private toastSvc: AppToastService) { }

  ngOnInit(): void {
    this.loadTodos();
  }
toast: ToastInfo | null= null;
threeDPrints: ThreeDPrint[] = [];

loadTodos() {
  this.threeDPrintSvc.index().subscribe(
    success => this.threeDPrints = success,
    err => console.log('Ovservable got and error' + err)
  );
}

getTosts() {
  return this.toastSvc.toasts;
}

removeToast(toast: ToastInfo) {
  this.toastSvc.remove(toast);
}

setPrintImage(print: ThreeDPrint) {
  if (print.printImageUrl) {
    return print.printImageUrl;
  } else {
    return 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?'
  }
}

}
