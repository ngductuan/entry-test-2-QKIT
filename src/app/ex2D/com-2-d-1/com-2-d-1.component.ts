import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-com-2-d-1',
  templateUrl: './com-2-d-1.component.html',
  styleUrl: './com-2-d-1.component.scss',
})
export class Com2D1Component {
  currentDate = new Date();
  userInfo = {
    name: 'John',
    address: 'Ho Chi Minh',
  };
  interval$ = interval(1000);
  addr = {
    addr1: 'Kha Van Can',
    city: 'Ho Chi Minh',
    state: 'State',
    zip: '12432',
    country: 'US',
  };

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

  addNewUser(){
    this.users = [...this.users, {name: 'New user', age: 28}]
  }

  // formatAddress(addr: any) {
  //   // console.log('function run', addr);
  //   return (
  //     addr.addr1 +
  //     ', ' +
  //     addr.city +
  //     ', ' +
  //     addr.state +
  //     ', ' +
  //     addr.zip +
  //     ', ' +
  //     addr.country
  //   );
  // }
}
