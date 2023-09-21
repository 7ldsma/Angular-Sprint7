import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetlistComponent } from '../budgetlist/budgetlist.component';



@NgModule({
  declarations: [
    HomeComponent,
    BudgetlistComponent,
    PanelComponent,
  ],
  exports: [
    PanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[],
})
export class HomeModule { }
