import { Property } from './Property'

export var PROPERTY: Property = {
   //Purchase Info
  repairCost: 10,
  afterRepairValue: 15000,
  purchasePrice: 220000,
  closingCost: 500,

  //rental info
  totalMonthlyRent: 12345,
  otherMonthlyIncome: 40,
  fixedExpenses: [],
  variableExpenses: [],
  futureAssumption:[],
  
  //loan data
  cash: false,
  downPayment: 0,
  loanAmount: 0,
  loanPoints: 3,
  interestRate:4.75,
  loanTerm: 30,
  totalCost:0,

  interestOnly: [
    { value: 'Y', display: 'Yes' },
    { value: 'N', display: 'No' }
  ],

  loanFee: [
    { value: 'W', display: 'Wrap loan fees/points into the loan' },
    { value: 'P', display: 'Pay loan fees/points out of pocket' }
  ],
  
  //property info
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  MLS: 0,
  propertyTax: 0,

}