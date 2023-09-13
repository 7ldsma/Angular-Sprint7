import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './components/home/panel/panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent
  ],
  exports: [
    HomeComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
