import { Component, ElementRef, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-com-2-b-1',
  templateUrl: './com-2-b-1.component.html',
  styleUrl: './com-2-b-1.component.scss',
})
export class Com2B1Component {
  data: string = '';
  @ViewChild('inputTag') inputTag: ElementRef | undefined;

  onClickMe(event?: MouseEvent) {
    if (this.inputTag) {
      this.data = this.inputTag.nativeElement.value;
    }
  }
}
