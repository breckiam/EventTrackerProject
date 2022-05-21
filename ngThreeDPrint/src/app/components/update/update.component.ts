import { ThreeDPrint } from './../../models/three-dprint';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  threeDPrint: ThreeDPrint = new ThreeDPrint();
}
