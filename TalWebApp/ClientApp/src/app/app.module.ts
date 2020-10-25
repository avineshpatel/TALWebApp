import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
 
import localeAu from '@angular/common/locales/en-AU';
registerLocaleData(localeAu, 'AU');

import { MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material/core';

import { NumberDirective } from './numbers-only.directive';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MonthlyPremiumCalculatorComponent } from './monthly-premium-calculator/monthly-premium-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MonthlyPremiumCalculatorComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'monthly-premium-calculator', component: MonthlyPremiumCalculatorComponent },
    ])
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
              { provide: LOCALE_ID, useValue: 'en-AU' },
              CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
