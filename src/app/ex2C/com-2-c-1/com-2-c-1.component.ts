import { Component } from '@angular/core';

@Component({
  selector: 'app-com-2-c-1',
  templateUrl: './com-2-c-1.component.html',
  styleUrl: './com-2-c-1.component.scss',
})
export class Com2C1Component {
  propertyData: string = 'propertyData';

  actionName: string = 'John';

  boxBgColor: string = '#000000';

  toggleBtn: boolean = false;
}
