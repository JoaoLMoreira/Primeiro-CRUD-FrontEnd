import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path:"form", component:FormComponent},
  {path:"lista", component:ListaComponent},
  {path:"", component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
