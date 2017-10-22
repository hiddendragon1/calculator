import { Injectable } from '@angular/core';

import { Property } from './Property';
import { PROPERTY } from './mock-property';

@Injectable()
export class PropertyService {
   
  private year: any={};
  private result: any = {};

  
  getProperty(): Property {

    PROPERTY.futureAssumption['Expenses Growth'] =2;
    PROPERTY.futureAssumption['Income Growth'] =2;
    PROPERTY.futureAssumption['PV Growth'] =2;
    PROPERTY.fixedExpenses['Electricity'] =50;
    PROPERTY.fixedExpenses['Water Sewer'] =50;
    PROPERTY.fixedExpenses['PMI'] =20;
    PROPERTY.fixedExpenses['Property Taxes'] =100;
    PROPERTY.fixedExpenses['Garbage'] =20;
    PROPERTY.fixedExpenses['HOAs'] =100;
    PROPERTY.fixedExpenses['Monthly Insurance'] =20;

    return PROPERTY;
  }

  getResults(): any {
    this.calResults();
    return this.result;
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
    var tvCashROI = this.result.cashonCashROI;
    
    //set data for the first year
    var data:any =[{annualIncome: tvAnnualIncome, 
                    annualExpense: tvAnnualExpense,
                    annualMortgage: tvMortgageExpense,
                    annualOperating: tvOperatingExpense,
                    annualCashflow: tvAnnualCashFlow,
                    cashROI: tvCashROI,
                    propertyValue: 0,
                    equity: 0,
                    loanBalance: 0,
                    totalProfit:0,
                    totalReturn:0
              }];
    
    //loop to loan term to calculate every year
    for ( var i=1; i< 30; i++) {
      tvOperatingExpense += tvOperatingExpense * (+PROPERTY.futureAssumption['Expenses Growth']/100);
      tvAnnualExpense = tvOperatingExpense + tvMortgageExpense;
      tvAnnualIncome += tvAnnualIncome * (+PROPERTY.futureAssumption['Income Growth']/100);
      tvAnnualCashFlow = tvAnnualIncome - tvAnnualExpense;
      tvCashROI = this.calCashonCashROI(tvAnnualCashFlow);

      var temp = {annualIncome:  tvAnnualIncome,
                  annualExpense: tvAnnualExpense,
                  annualMortgage: tvMortgageExpense,
                  annualOperating: tvOperatingExpense,
                  annualCashFlow: tvAnnualCashFlow,
                  cashROI: tvCashROI,
                  propertyValue: 0,
                  equity: 0,
                  loanBalance: 0,
                  totalProfit:0,
                  totalReturn:0

                  };

      //push yearly data
      data.push(temp);
    }
    
  return data;

  }

  calResults() : void {
    //if cash purchase then skip calculation and use default
    if(PROPERTY.cash) {
      this.result.downPayment = +PROPERTY.purchasePrice;
      this.result.loanAmount = 0;
      this.result.loanPoints = 0;
      this.result.PI = 0;
      PROPERTY.loanTerm=0;
    } 
    //else calculate loan detail
    else {
      this.result.downPayment = this.calDownPayment();
      this.result.loanAmount = this.calLoanAmount();
      this.result.loanPoints = this.calLoanPoints();
      this.result.PI = this.calPI();
    }
    //calculate other detail
    this.result.totalCash = this.calTotalCashNeed();
    this.result.totalCost = this.calTotalCost();
    this.result.monthlyIncome = this.calMonthlyIncome();
    this.result.monthlyExpense = this.calMonthlyOperating() + this.result.PI;
    this.result.monthlyCashFlow = this.result.monthlyIncome - this.result.monthlyExpense;
    this.result.cashonCashROI = this.calCashonCashROI(this.result.monthlyCashFlow * 12);
    this.result.years = this.calYears();
    //if wrap fee into loan
    if(PROPERTY.loanFee.value == 'W')
      this.result.loanAmount += this.result.loanPoints;

    console.log(this.result);
  }
}
