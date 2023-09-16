import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './components/home/panel/panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent,
    ModalComponent
  ],
  exports: [
    HomeComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[],
})
export class HomeModule { }
