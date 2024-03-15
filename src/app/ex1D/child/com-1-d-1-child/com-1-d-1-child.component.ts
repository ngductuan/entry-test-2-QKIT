import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-com-1-d-1-child',
  templateUrl: './com-1-d-1-child.component.html',
  styleUrl: './com-1-d-1-child.component.scss'
})
export class Com1D1ChildComponent {
  @Input() dataParent: string = "";
  @Output() dataChange = new EventEmitter<string>()

  sendDataToParent(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.dataChange.emit(value)
  }
}
