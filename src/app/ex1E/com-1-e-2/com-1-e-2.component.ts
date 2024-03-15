import { Component, OnDestroy } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-com-1-e-2',
  templateUrl: './com-1-e-2.component.html',
  styleUrl: './com-1-e-2.component.scss',
})
export class Com1E2Component implements OnDestroy {
  dataComA: string = '';
  private subscription: Subscription;

  constructor(private dataService: ShareDataService) {
    this.subscription = this.dataService.getData().subscribe((data) => {
      this.dataComA = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
