import { Component } from '@angular/core';
import { PanelService } from 'src/app/home/services/panel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  constructor ( public panelService : PanelService ){

  }


}
