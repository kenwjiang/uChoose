import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseComponent } from './choose/choose.component';
import { WheelComponent } from './wheel/wheel.component';


const routes: Routes = [
  {path: "", component: ChooseComponent},
  {path: "wheel", component: WheelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
