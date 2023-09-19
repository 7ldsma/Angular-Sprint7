import { Component } from '@angular/core';
import { Budget } from './interfaces/budget.component';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { BudgetlistService } from '../services/budgetlist.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor ( public budgetlistService: BudgetlistService, private FormBuilder: FormBuilder){

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
}, {Validator: this.serviceCheck}); 


private buildForm(){
    this.budgetForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value) })

} 

public budgetList: Budget[] = [];


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



serviceCheck (control: AbstractControl) {
    const webControl = control.get('web')?.value;
    const consultoriaControl = control.get('consultoria')?.value;
    const addsControl = control.get('adds')?.value;

    // if(webControl && consultoriaControl && addsControl) {
    //     const web = webControl.value;
    //     const consultoria = consultoriaControl.value;
    //     const adds = addsControl.value;

        console.log('HOLA HOLA ' + webControl);
        if ( webControl || consultoriaControl || addsControl ) {
            return null;
        }
        return true;
    }




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
        this,this.budget.total += 0;        
    }

}



}
