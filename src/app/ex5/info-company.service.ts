import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Company } from './models/company.model';

@Injectable({
  providedIn: 'root',
})
export class InfoCompanyService {
  constructor(private http: HttpClient) {}

  getInfoCompany():Observable<Company[]>{
    return this.http.get('https://5fa1409d2541640016b6ac0d.mockapi.io/api/v1/company').pipe(
      map((res: any) => res)
    )
  }
}
