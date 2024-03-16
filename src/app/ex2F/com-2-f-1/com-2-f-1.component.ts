import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-com-2-f-1',
  templateUrl: './com-2-f-1.component.html',
  styleUrl: './com-2-f-1.component.scss'
})
export class Com2F1Component implements OnInit{
  userDataGet: any[] = []

  constructor(private userData: UserDataService){}

  ngOnInit(): void {
    this.userDataGet = this.userData.getUserData()
  }
}
