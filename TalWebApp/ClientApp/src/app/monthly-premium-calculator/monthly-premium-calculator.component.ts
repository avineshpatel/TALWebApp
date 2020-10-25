import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Occupation } from '../occupation';
import { GetPremiumRequest } from '../getpremiumrequest';

@Component({
            selector: 'monthly-premium-calculator',
            templateUrl: 'monthly-premium-calculator.component.html'
})

export class MonthlyPremiumCalculatorComponent implements OnInit {
   
  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit() {}

   
}

