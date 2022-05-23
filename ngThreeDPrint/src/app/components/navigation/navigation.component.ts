import { ThreeDService } from 'src/app/services/three-d.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreeDPrint } from './../../models/three-dprint';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, NgModule } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private printSvc: ThreeDService, private router: Router) { }

  ngOnInit(): void {
  }
  closeResult: string = '';
  searchInput: string = '';
  threeDPrint: ThreeDPrint = new ThreeDPrint();

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  idOrKeyword(search: string) {
    if (isNaN(parseInt(search))) {
      console.log(search);
      // this.displayKeywordPrint(search);
    } else {
      this.displayPrint(parseInt(search));
    }
  }

  displayPrint(id: number) {
    this.printSvc.show(id).subscribe(
      success => {
        this.router.navigateByUrl('/prints/' + id);
      },
      err => {
        this.router.navigateByUrl('/notFound')
      }
    )
  }

  // displayKeywordPrint(keyword: string) {
  //   this.printSvc.showByKeyword(keyword).subscribe(
  //     success => {
  //       this.threeDPrint = success;
  //       console.log(this.threeDPrint);
  //       if (this.threeDPrint.id) {
  //       this.router.navigateByUrl('/prints/' + this.threeDPrint.id);
  //       }
  //     },
  //     err => {
  //       this.router.navigateByUrl('/notFound')
  //     }
  //   )
  // }

}
