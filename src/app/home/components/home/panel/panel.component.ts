import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

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
