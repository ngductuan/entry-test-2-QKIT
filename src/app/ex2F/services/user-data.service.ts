import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  getUserData() {
    return [
      {
        name: 'Tran Van A',
        age: 30,
      },
      {
        name: 'Trung Doan',
        age: 28,
      },
      {
        name: 'Lam Tran',
        age: 29,
      },
      {
        name: 'Van Anh',
        age: 16,
      },
    ];
  }
}
