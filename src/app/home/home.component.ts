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


  constructor ( public budgetlistService: BudgetlistService, private FormBuilder: FormBuilder, private sharedService: SharedService){

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


public budgetList: Budget[] = [];
public filteredBudgetList: Budget[] = [];


public serviceSelected: boolean = false;
    

budgetForm = this.FormBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)])],
    client: ['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]{3,}$/)])],
    web: [false],
    consultoria: [false],
    adds: [false]
}, {validators: this.serviceCheck});


private buildForm(){
    this.budgetForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value) })

} 


serviceCheck (control: AbstractControl) {

    const webControl = control.get('web')?.value;
    const consultoriaControl = control.get('consultoria')?.value;
    const addsControl = control.get('adds')?.value;

    if(webControl === false && consultoriaControl === false && addsControl === false){
        return { noChecked: true };
    }
        return null;
    }



save(event: Event) {
    event.preventDefault();
    if(this.budgetForm.valid) {
        const value = this.budgetForm.value as Budget;
        value.total = this.budgetlistService.getTotal();
        this.budgetlistService.addBudget(value);
    } else {
        this.budgetForm.markAllAsTouched();
    }
    this.budgetForm.reset();
    this.budget.total = 0;

}


get nameField() {
    return this.budgetForm.get('name');
}

get clientField() {
    return this.budgetForm.get('client');
}



  updatePrice(){

    let totalWebBudget:number = 0;

    if(this.budget.web) {
        totalWebBudget = this.budgetlistService.calculateTotal(500,1,1);
        } else {
        totalWebBudget = 0;
    }        

    let consultingB = this.budget.consultoria ? 300 : 0;
    let addsB = this.budget.adds ? 200 : 0;

    this.totalBudget = (totalWebBudget + consultingB + addsB);

    this.budget.total = this.totalBudget;
    

}



}
