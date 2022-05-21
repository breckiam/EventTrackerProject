import { UpdateComponent } from './components/update/update.component';
import { SinglePrintComponent } from './components/single-print/single-print.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'prints/:id', component: SinglePrintComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
