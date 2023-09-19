import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Budget } from './interfaces/budget.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor ( public homeService : HomeService ){

  }




  updatePrice(){

    if(this.homeService.budget.web) {
        this.homeService.budget.total = 500;
        } else {
        this.homeService.budget.total = 0;
    }        
    
    if (this.homeService.budget.consultoria) {
        this.homeService.budget.total += 300;            
    } else {
        this.homeService.budget.total += 0;
    }

    if (this.homeService.budget.adds) {
        this.homeService.budget.total += 200;
    } else {
        this,this.homeService.budget.total += 0;        
    }

}



}
