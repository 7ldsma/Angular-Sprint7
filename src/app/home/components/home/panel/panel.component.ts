import { Component } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/home/services/modal.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  pagesCtrl = new FormControl('', [Validators.required, Validators.maxLength(2), Validators.min(1)])
  languagesCtrl = new FormControl('', [])

  contenido: any;

  constructor ( public homeService : HomeService, public modalService: NgbModal){

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


}
