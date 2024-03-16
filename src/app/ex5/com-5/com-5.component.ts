import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { InfoCompanyService } from '../info-company.service';

@Component({
  selector: 'app-com-5',
  templateUrl: './com-5.component.html',
  styleUrl: './com-5.component.scss',
})
export class Com5Component implements OnInit{
  companies: Company[] = []

  constructor(private infoComService: InfoCompanyService){}

  ngOnInit(): void {
      this.getInfoCompany()
  }

  getInfoCompany(){
    this.infoComService.getInfoCompany().subscribe(coms => this.companies = coms)
  }
}
