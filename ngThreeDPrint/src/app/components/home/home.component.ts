import { ThreeDPrint } from './../../models/three-dprint';
import { ThreeDService } from './../../services/three-d.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private threeDPrintSvc: ThreeDService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

threeDPrints: ThreeDPrint[] = [];

loadTodos() {
  this.threeDPrintSvc.index().subscribe(
    success => this.threeDPrints = success,
    err => console.log('Ovservable got and error' + err)
  );
}

setPrintImage(print: ThreeDPrint) {
  if (print.printImageUrl) {
    return print.printImageUrl;
  } else {
    return 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?'
  }
}

}
