import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './components/home/panel/panel.component';
import { PanelService } from './services/panel.service';



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
  ],
  providers:[PanelService],
})
export class HomeModule { }
