import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class APIDataService{
  constructor(private httpClient: HttpClient){}
  public Get(url: string): Observable<any>{
  return this.httpClient.get(url);
  }
}
