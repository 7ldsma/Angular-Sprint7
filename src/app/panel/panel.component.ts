import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  pagesCtrl = new FormControl('', [Validators.required, Validators.pattern(/^(?!0)\d{1,2}$/)])
  languagesCtrl = new FormControl('', [Validators.required, Validators.pattern(/^\d{1,2}$/)])

  contenido: any;

  public pages: number = 1;
  public languages: number = 1;

  modalMessage: string = '';


  constructor ( public homeService : HomeService, public ngbModal: NgbModal){

    this.pagesCtrl.valueChanges.
    pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    })    

  }

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
    if(this.homeService.budget.total){
            this.homeService.budget.total += (pages * languages * 30);      
    }
    return this.homeService.budget.total;
}


decreasePrice(pages: number, languages: number){
    if(this.homeService.budget.total){
        if (languages > 0 ){
            this.homeService.budget.total -= pages * languages * 30;
        } else {
            this.homeService.budget.total -= pages * 30;
            
        }            

    }
    return this.homeService.budget.total;

    console.log(this.pages, this.languages)
}




}
