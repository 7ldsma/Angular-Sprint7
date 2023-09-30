import { Component} from '@angular/core';
import { Budget} from './interfaces/budget.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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


  constructor ( public budgetlistService: BudgetlistService, 
    private FormBuilder: FormBuilder, 
    private sharedService: SharedService, ){

    this.buildForm();

    this.sharedService.totalBudget$.subscribe(total => {
    this.totalBudget = total;

  });
 }

 
 public budget: Budget = {
    name: '',
    client: '',
    web: false,
    consultoria: false,
    adds: false,
    total: 0,
    fecha: new Date,
};


public budgetList: Budget[] = [];
public filteredBudgetList: Budget[] = [];


public serviceSelected: boolean = false;

ngOnInIt(){
    this.budgetlistService.ngOnInIt(this.budget)
}

budgetForm = this.FormBuilder.group({

    name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)])],
    client: ['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]{3,}$/)])],
    web: [],
    consultoria: [],
    adds: [],

}, {validators: this.serviceCheck});


private buildForm(){
    this.budgetForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {console.log(value) })

} 


serviceCheck(control: AbstractControl) {

    const webControl = control.get('web')?.value;
    const consultoriaControl = control.get('consultoria')?.value;
    const addsControl = control.get('adds')?.value;

    if(!webControl && !consultoriaControl && !addsControl ){
        return { noCheck: true };
        console.log("esto no existe")
    } else {
        return null;

    }
   }



save(event: Event) {
    event.preventDefault();
    if(this.budgetForm.valid) {
        const value = this.budgetForm.value as Budget;
        value.total = this.budgetlistService.getTotal();
        this.budgetlistService.addBudget(value);
        this.budgetForm.reset();
        this.budgetlistService.settotalbudget();
    } else {
        // alert('you must fill the form')
        this.budgetForm.markAllAsTouched();
    }
    this.budget.total = 0;


}


get nameField() {
    return this.budgetForm.get('name');
}

get clientField() {
    return this.budgetForm.get('client');
}


updatingBud(){
    this.budgetlistService.updatePrice(this.budget)
}






}
