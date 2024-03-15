import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-com-1-d-1',
  templateUrl: './com-1-d-1.component.html',
  styleUrl: './com-1-d-1.component.scss',
})
export class Com1D1Component {
  dataParent: string = '';
  dataChild: string = '';

  processEvent(event: Event): string {
    if (event instanceof InputEvent) {
      const value = (event.target as HTMLInputElement).value;
      this.dataParent = value;
      return value;
    }
    return '';
  }

  handleChildData(data: string) {
    this.dataChild = data
  }
}
