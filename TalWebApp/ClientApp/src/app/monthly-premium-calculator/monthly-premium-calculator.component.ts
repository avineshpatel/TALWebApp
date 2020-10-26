import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Occupation } from '../occupation';
import { GetPremiumRequest } from '../getpremiumrequest';

import * as moment from 'moment';
import { CurrencyPipe } from '@angular/common';

@Component({
            selector: 'monthly-premium-calculator',
            templateUrl: 'monthly-premium-calculator.component.html'
})

export class MonthlyPremiumCalculatorComponent implements OnInit {

  currentDate: moment.Moment;  
  premiumCalculatorForm: FormGroup;
  occupations: Occupation[];
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private currencyPipe: CurrencyPipe) { }

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
    this.submitted = false;
    this.premiumCalculatorForm.reset();
  }

  getOccupations(): void {
    this.apiService.getOccupations().subscribe
      (occupations => {
        this.occupations = occupations;        
      },
      err => console.log(err) );
  }

  dobChangeEvent(event) {
    // Return date object
    console.log(event.value);

    var date = event.value;

    // Calculate age
    var age = this.calculateAge(date);

    this.premiumCalculatorForm.patchValue({ age: age });
  }

  calculateAge(birthdate: any): number {
    return moment().diff(birthdate, 'years');
  }

  dobDateFilter = (m: moment.Moment | null): boolean => {
    return (m || moment()) <= this.currentDate;
  }

  changeOccupation(occupationRating: any) {

    this.submitted = true;
 
    // Don't calculate premium if form is invalid
    if (this.premiumCalculatorForm.invalid) {
      this.premiumCalculatorForm.patchValue({ premiumCalculated: "" });
      return;
    }

    if (occupationRating != "0") {

      var request = new GetPremiumRequest();

      request.age = Number(this.premiumCalculatorForm.value.age);
      request.occupationRating = occupationRating;
      request.sumInsured = Number(this.premiumCalculatorForm.value.sumInsured);

      this.apiService.getPremium(request)
        .subscribe(result => {
          console.log(result);
          this.premiumCalculatorForm.patchValue({ premiumCalculated: this.getFormattedCurrency(result) });
        },
          err => {
            console.log(err);
            this.premiumCalculatorForm.patchValue({ premiumCalculated: "" });
          }
      );
    }
  }

  getFormattedCurrency(currency: Number) {
    // Remove the A at the start before the A$200.00
    return this.currencyPipe.transform(currency, 'AUD', 'symbol', '1.2-2').substring(1);
  }

}

