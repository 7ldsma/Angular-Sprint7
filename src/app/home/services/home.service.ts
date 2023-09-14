import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/budget.component';
import { PanelService } from './panel.service';

@Injectable({providedIn: 'root'})
export class HomeService {
    
    constructor ( public panelService : PanelService ){

    }


    public budget : Budget = {
        name: '',
        client: '',
        web: false,
        consultoria: false,
        adds: false,
        total: 0,
      };
    


    updatePrice(){

        if(this.budget.web) {
            this.budget.total = 500;
            if(this.panelService.pages > 1 || this.panelService.languages > 1){
                this.budget.total += (this.panelService.pages * this.panelService.languages * 30)
                console.log("hola")
            }
            } else {
            this.budget.total = 0;
        }

        if (this.budget.consultoria) {
            this.budget.total += 300;
        } else {
            this.budget.total += 0;
        }

        if (this.budget.adds) {
            this.budget.total += 200;
        } else {
            this.budget.total += 0;        
        }

    }


    
}