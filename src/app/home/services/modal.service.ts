
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({providedIn: 'root'})
export class ModalService {
    
    constructor (public modal: NgbModal ) {

    }

    openLG(contenido :any) {
        this.modal.open(contenido, { size : 'lg'})
    }

}