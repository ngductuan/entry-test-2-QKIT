import { Component, forwardRef } from '@angular/core';

@Component({
  selector: 'app-com-2-e-1',
  templateUrl: './com-2-e-1.component.html',
  styleUrl: './com-2-e-1.component.scss'
})
export class Com2E1Component{
  toggleBtn: boolean = false;
  toggleNgIf: boolean = true;
  boxBgColor: string = '#32a852';
  dataModel: string = ''
  users = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];

  get boxStyle() {
    return {
      'background-color': this.boxBgColor
    };
  }
}
