import { HttpClientModule } from '@angular/common/http';
import { ThreeDService } from './services/three-d.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SinglePrintComponent } from './components/single-print/single-print.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinglePrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ThreeDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
