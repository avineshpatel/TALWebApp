import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Occupation } from './occupation';
import { GetPremiumRequest } from './getpremiumrequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
   
  constructor(private httpClient: HttpClient, @Inject('API_BASE_URL') private apiBaseURL: string) { }

  public getOccupations() {
    var url = this.apiBaseURL + 'occupation';
    console.log(url);
    return this.httpClient.get<Occupation[]>(url, httpOptions);
  }

  public getPremium(request : GetPremiumRequest) { 
    var data = { sumInsured: request.sumInsured, occupationRating: request.occupationRating, age: request.age  };
    var url = this.apiBaseURL + 'premium';
    console.log(url);
    console.log(data);    
    return this.httpClient.post<Number>(url, JSON.stringify(data) , httpOptions);
  }

  

}
