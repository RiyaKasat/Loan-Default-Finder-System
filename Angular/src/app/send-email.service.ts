import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iinfo } from './Forms/interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private _http: HttpClient) {}

  sendMessage(body) {
    return this._http.post('http://localhost:3001/sendmail', body);
  }

  sendEmail(obj): Observable<Iinfo> {
    return this._http.post<Iinfo>('http://localhost:3001/sendFormData', obj)
  }
}
