import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-content',
  templateUrl: './conditional-content.component.html',
  styleUrl: './conditional-content.component.scss',
})
export class ConditionalContentComponent {
  counter: number = 2;
  color: string = 'primary'
  linkArr: string[] = ['Active', 'Link 1', 'Link 2']

  changeColor(){
    this.color = this.color == 'primary' ? 'danger' : 'primary'
  }
}
