import { Component, OnDestroy } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-com-1-e-1',
  templateUrl: './com-1-e-1.component.html',
  styleUrl: './com-1-e-1.component.scss',
})
export class Com1E1Component {
  dataComB: string = '';

  constructor(private dataSend: ShareDataService) {}

  sendDataInputA(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSend.sendData(value);
  }
}
