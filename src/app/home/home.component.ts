import { Component} from '@angular/core';
import { Budget } from './interfaces/budget.component';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { BudgetlistService } from '../services/budgetlist.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    totalBudget: number = 0;

  constructor ( private budgetlistService: BudgetlistService, private FormBuilder: FormBuilder, private sharedService: SharedService){

    this.buildForm();

    this.sharedService.totalBudget$.subscribe(total => {
    this.totalBudget = total;

  });
 }


  public budget: Budget = {
    name: '',
    client: '',
    web: {
        enabled: false,
        pages: 0,
        languages: 0,
    },
    consultoria: false,
    adds: false,
    total: 0,
    fecha: new Date,
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
        value.total = this.budgetlistService.getTotal();
        this.budgetlistService.addBudget(value);
    } else {
        this.budgetForm.markAllAsTouched();
    }
    this.budget.total = 0;
    this.budgetForm.reset();

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

    let totalWebBudget:number = 0;

    if(this.budget.web) {
        totalWebBudget = this.budgetlistService.calculateTotal(500, 1, 1);
        this.totalBudget = totalWebBudget;
        } else {
        this.totalBudget = 0;
    }        
    
    if (this.budget.consultoria) {
        this.totalBudget += 300 ; 
    } else {
        this.totalBudget += 0;
    }

    if (this.budget.adds) {
        this.totalBudget += 200;
    } else {
        this.totalBudget += 0;        
    }

}



}
