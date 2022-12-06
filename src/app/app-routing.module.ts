import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'}, //:dataid
  {path:'main',component:MainComponent},
  {path:'view/:dataid',component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
