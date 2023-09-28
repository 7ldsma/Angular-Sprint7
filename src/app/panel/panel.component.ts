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
  
  // public pages: number = 1;
  // public languages: number = 1;
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
    // this.increasePrice(this.pages, this.languages);

  }

  decreasePages (): void {
    if (this.web.pages > 1) {
      this.web.pages -= 1;
      this.totalWebBudget = this.budgetlistService.calculateTotal(500, this.web.pages, this.web.languages);
      this.sharedService.updateTotalBudget(this.totalWebBudget);

      // this.decreasePrice(this.pages, this.languages);

    }
  }

  increaseLanguages (): void {
    this.web.languages += 1;
    this.totalWebBudget = this.budgetlistService.calculateTotal(500 , this.web.pages, this.web.languages);
    this.sharedService.updateTotalBudget(this.totalWebBudget);

    // this.increasePrice(this.pages, this.languages);

  }

  decreaseLanguages (): void {
    if (this.web.languages > 0) {
      this.web.languages -= 1;
      this.totalWebBudget = this.budgetlistService.calculateTotal(500, this.web.pages, this.web.languages);
      this.sharedService.updateTotalBudget(this.totalWebBudget);

        // this.decreasePrice(this.pages, this.languages);
    }
  }

    
// increasePrice(pages: number, languages: number){
//     if(this.homeService.budget.total){
//             this.homeService.budget.total += (pages * languages * 30);      
//     }
//     return this.homeService.budget.total;
// }


// decreasePrice(pages: number, languages: number){
//     if(this.homeService.budget.total){
//         if (languages > 0 ){
//             this.homeService.budget.total -= pages * languages * 30;
//         } else {
//             this.homeService.budget.total -= pages * 30;
            
//         }            

//     }
//     return this.homeService.budget.total;

//     console.log(this.pages, this.languages)
// }




}
