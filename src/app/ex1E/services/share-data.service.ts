import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private dataSubject = new Subject<string>();

  sendData(data: string) {
    this.dataSubject.next(data);
  }

  getData(): Observable<string> {
    return this.dataSubject.asObservable();
  }
}
