import { Injectable } from '@angular/core';
import { Budget } from '../home/interfaces/budget.component';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HomeService {
    
    constructor( private FormBuilder: FormBuilder) { 

        this.buildForm();
     }

     public budget : Budget = {
        name: '',
        client: '',
        web: false,
        consultoria: false,
        adds: false,
        total: 0,
      };


        
    budgetForm = this.FormBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)])],
        client: ['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]{3,}$/)])],
        web: ['', []],
        consultoria: ['', []],
        adds: ['', []]
    }, {}); 



    public budgetList: Budget[] = [];

  
    private buildForm(){
        this.budgetForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value) })

    } 

    save(event: Event) {
        event.preventDefault();
        if(this.budgetForm.valid) {
            const value = this.budgetForm.value as Budget;
            this.budgetList.push(value);
            this.budgetForm.reset();
        } else {
            this.budgetForm.markAllAsTouched();
        }

        console.log(this.budgetList)
    }

    get nameField() {
        return this.budgetForm.get('name');
    }

    get clientField() {
        return this.budgetForm.get('client');
    }



    
    
}