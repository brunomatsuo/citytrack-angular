import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServicosComponent } from './list-servicos/list-servicos.component';


const routes: Routes = [
  { path: '', component: ListServicosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }