import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Occupation } from '../occupation';
import { GetPremiumRequest } from '../getpremiumrequest';

import * as moment from 'moment';

@Component({
            selector: 'monthly-premium-calculator',
            templateUrl: 'monthly-premium-calculator.component.html'
})

export class MonthlyPremiumCalculatorComponent implements OnInit {

  currentDate: moment.Moment;  
  premiumCalculatorForm: FormGroup;
  occupations: Occupation[];

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit() {

    this.premiumCalculatorForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      sumInsured: ['', Validators.required],
      occupation: ['', Validators.required],
      premiumCalculated: [''] 
    }, {});

    // Set current date for date picker
    this.currentDate = moment();

    // Select the already added default option for the occupations dropdown.
    this.premiumCalculatorForm.patchValue({ occupation: "0" });

    // Get occupations for dropdown
    this.getOccupations();

  }

  // convenience getter for easy access to form fields
  get f() { return this.premiumCalculatorForm.controls; }

  onReset() {    
    this.premiumCalculatorForm.reset();
  }

  getOccupations(): void {
    this.apiService.getOccupations().subscribe
      (occupations => {
        this.occupations = occupations;        
      });
  }

  dobChangeEvent(event) {
    // Return date object
    console.log(event.value);

    var date = event.value;

    // Calculate age based
    var age = this.calculateAge(date);

    this.premiumCalculatorForm.patchValue({ age: age });
  }

  calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  dobDateFilter = (m: moment.Moment | null): boolean => {
    return (m || moment()) <= this.currentDate;
  } 

}

