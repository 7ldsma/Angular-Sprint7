import { Injectable } from '@angular/core';
import { Budget } from '../interfaces/budget.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class HomeService {
    

    public webBudget: FormGroup;
    constructor( 
        private formBuilder: FormBuilder
    ) {
        this.webBudget = this.formBuilder.group({

        });
    }


    public pages: number = 1;
    public languages: number = 1;

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


    increasePages (): void {
        this.pages += 1;
        console.log(this.pages)
        
        this.increasePrice(this.pages, this.languages);

      }
    
      decreasePages (): void {
        if (this.pages > 1) {
          this.pages -= 1;
          this.decreasePrice(this.pages, this.languages);
  
        }
      }
    
      increaseLanguages (): void {
        this.languages += 1;
        this.increasePrice(this.pages, this.languages);
  
      }
    
      decreaseLanguages (): void {
        if (this.languages > 0) {
          this.languages -= 1;
            this.decreasePrice(this.pages, this.languages);
        }
      }

        
    increasePrice(pages: number, languages: number){
        if(this.budget.total){
                this.budget.total += (pages * languages * 30);      
        }
        return this.budget.total;
    }
    

    decreasePrice(pages: number, languages: number){
        if(this.budget.total){
            if (languages > 0 ){
                this.budget.total -= pages * languages * 30;
            } else {
                this.budget.total -= pages * 30;
                
            }            

        }
        return this.budget.total;

        console.log(this.pages, this.languages)
    }
    
}