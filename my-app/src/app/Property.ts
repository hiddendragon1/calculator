export class Property {  
  //Purchase Info
  repairCost: number;
  afterRepairValue: number;
  purchasePrice: number;
  closingCost: number;
  totalCost: number;
  //rental info
  totalMonthlyRent: number;
  otherMonthlyIncome: number;

  //expenses
  fixedExpenses: any;
  variableExpenses: any;
  futureAssumption:any;

  //loan data
  cash: boolean;
  downPayment: number;
  loanAmount: number;
  interestRate:number;
  loanTerm: number;
  loanPoints: number;
  loanFee: any;
  otherFee: number;
  interestOnly: any;

  //property info
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  MLS: number;
  propertyTax: number;
}

