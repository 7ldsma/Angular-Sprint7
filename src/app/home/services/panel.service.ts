
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PanelService {
    constructor() { }
    
    public pages: number = 1;
    public languages: number = 1;
  
    increasePages (): void {
      this.pages += 1;
    }
  
    decreasePages (): void {
      if (this.pages > 1) {
        this.pages -= 1;
      }
    }
  
    increaseLanguages (): void {
      this.languages += 1;
    }
  
    decreaseLanguages (): void {
      if (this.languages > 1) {
        this.languages -= 1;
      }
    }

    

}