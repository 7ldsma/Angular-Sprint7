import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BudgetlistService } from '../services/budgetlist.service';
import { SharedService } from '../services/shared.service';
import { Webservice } from '../home/interfaces/budget.component';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {



  constructor ( private budgetlistService : BudgetlistService, public ngbModal: NgbModal, private sharedService: SharedService){

    this.pagesCtrl.valueChanges.
    pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    })    

  }



  pagesCtrl = new FormControl('', [Validators.required, Validators.pattern(/^(?!0)\d{1,2}$/)])
  languagesCtrl = new FormControl('', [Validators.required, Validators.pattern(/^\d{1,2}$/)])

  contenido: any;

  public web: Webservice = {
    pages: 1,
    languages: 1,
  }

  public totalWebBudget: number = 1;


  modalMessage: string = '';


  getPages (event: Event) {
    event.preventDefault();

  }

  pagesModal() {
    this.modalMessage = "Every Website must have at least one page.";
  }

  languagesModal() {
    this.modalMessage = "If the number of languages selected is 0, the Website will be developed in english"
  }


  increasePages (): void {
    this.web.pages += 1;
    console.log(this.web.pages)
    this.totalWebBudget = this.budgetlistService.calculateTotal(500, this.web.pages, this.web.languages);
    this.sharedService.updateTotalBudget(this.totalWebBudget);

  }

  decreasePages (): void {
    if (this.web.pages > 1) {
      this.web.pages -= 1;
      this.totalWebBudget = this.budgetlistService.calculateTotal(500, this.web.pages, this.web.languages);
      this.sharedService.updateTotalBudget(this.totalWebBudget);


    }
  }

  increaseLanguages (): void {
    this.web.languages += 1;
    this.totalWebBudget = this.budgetlistService.calculateTotal(500 , this.web.pages, this.web.languages);
    this.sharedService.updateTotalBudget(this.totalWebBudget);


  }

  decreaseLanguages (): void {
    if (this.web.languages > 0) {
      this.web.languages -= 1;
      this.totalWebBudget = this.budgetlistService.calculateTotal(500, this.web.pages, this.web.languages);
      this.sharedService.updateTotalBudget(this.totalWebBudget);

    }
  }

    


}
