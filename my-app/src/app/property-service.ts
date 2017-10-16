import { Injectable } from '@angular/core';

import { Property } from './Property';
import { PROPERTY } from './mock-property';

@Injectable()
export class PropertyService {
   
  years: Array<any>;
  private result: any = {};
  
  getProperty(): Property {

    PROPERTY.futureAssumption['Annual Expenses Growth'] =2;
    PROPERTY.futureAssumption['Annual Income Growth'] =2;
    PROPERTY.futureAssumption['Annual PV Growth'] =2;
    PROPERTY.fixedExpenses['Electricity'] =50;
    PROPERTY.fixedExpenses['Water Sewer'] =50;
    PROPERTY.fixedExpenses['PMI'] =20;
    PROPERTY.fixedExpenses['Water Sewer'] =100;
    PROPERTY.fixedExpenses['Garbage'] =20;
    PROPERTY.fixedExpenses['HOAs'] =100;
    PROPERTY.fixedExpenses['Monthly Insurance'] =20;
    return PROPERTY;
  }

  getResults(): any {
    this.calResults();
    return this.result;
  }

  getYears(): any {
    this.years = this.calYears();
    return this.years;
  }


  ngOnInit(): void {


  }

  calTotalCost(): any {
    return  +PROPERTY.purchasePrice + +PROPERTY.closingCost + +PROPERTY.repairCost ;
  }

  calDownPayment(): number {
    return +PROPERTY.purchasePrice * (+PROPERTY.downPayment/100);
  }

  calLoanAmount(): number { 
    return  +PROPERTY.purchasePrice - this.result.downPayment;
  }

  //calculate for monthly mortgage
  calPI(): number {
    var R =  (+PROPERTY.interestRate/100)/12;
    var PI = (this.result.loanAmount * R )/ ( 1 - Math.pow(1+R,-1* +PROPERTY.loanTerm * 12 ));
    return PI;
  }

  calLoanPoints(): number {
    return this.result.loanAmount * (+PROPERTY.loanPoints/100);
  }

  calTotalCashNeed(): number {
    return this.result.loanPoints + this.result.downPayment + +PROPERTY.closingCost + +PROPERTY.repairCost;
  }

  calCashonCashROI(cashflow: number): number {
      return cashflow/this.result.totalCash *100;
  }

  //calculate monthly income
  calMonthlyIncome(): number {
    return +PROPERTY.totalMonthlyRent + +PROPERTY.otherMonthlyIncome;
  }

  //calculate monthly expense
  calMonthlyOperating(): number {
    var expense: number = 0;
    //loop through to add up fixed expenses
    for ( var value in PROPERTY.fixedExpenses ){
      expense += +PROPERTY.fixedExpenses[value];
    };
   
    return expense;
  }


  calYears() : any {
    //initialize data with the first year
    var tvOperatingExpense = this.calMonthlyOperating() * 12;
    var tvMortgageExpense = this.result.PI * 12;
    var tvAnnualIncome=  this.result.monthlyIncome * 12;
    var tvAnnualExpense= this.result.monthlyExpense * 12;
    var tvAnnualCashFlow= this.result.monthlyCashFlow * 12;


    //calculate cash on cash ROI from annual cash flow 
    this.result.cashonCashROI = this.calCashonCashROI(tvAnnualCashFlow);
    
    //set data for the first year
    var data: any =[{annualIncome: tvAnnualIncome, 
                    annualExpense: tvAnnualExpense,
                    annualMortgage: tvMortgageExpense,
                    annualOperating: tvOperatingExpense,
                    annualCashflow: tvAnnualCashFlow
                     }];
    
    //loop to loan term to calculate every year
    for ( var i=1;i< +PROPERTY.loanTerm; i++) {
      tvOperatingExpense += tvOperatingExpense * (+PROPERTY.futureAssumption['Annual Expenses Growth']/100);
      tvAnnualExpense = tvOperatingExpense + tvMortgageExpense;
      tvAnnualIncome += tvAnnualIncome * (+PROPERTY.futureAssumption['Annual Income Growth']/100);
      tvAnnualCashFlow = tvAnnualIncome - tvAnnualExpense;
      var temp = {annualIncome:  tvAnnualIncome,
                  annualExpense: tvAnnualExpense,
                  annualMortgage: tvMortgageExpense,
                  annualOperating: tvOperatingExpense,
                  annualCashFlow: tvAnnualCashFlow
                  };

      //push yearly data
      data.push(temp);
    }
    
    console.log(data);
    return data;
  }

  calResults() : void {
    this.result.totalCost = this.calTotalCost();
    this.result.downPayment = this.calDownPayment();
    this.result.loanAmount = this.calLoanAmount();
    this.result.loanPoints = this.calLoanPoints();
    this.result.totalCash = this.calTotalCashNeed();
    this.result.PI = this.calPI();
    this.result.monthlyIncome = this.calMonthlyIncome();
    this.result.monthlyExpense = this.calMonthlyOperating() + this.result.PI;
    this.result.monthlyCashFlow = this.result.monthlyIncome - this.result.monthlyExpense;
  }
}
