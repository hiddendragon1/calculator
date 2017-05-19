angular.module('caculator', [])
  .controller('CalculatorController', function($scope) {
	var calData = this;

	calData.purchaseValue=null;
	calData.closingCost=null;
	var totalAquisition;
    calData.repairCost=null;
    calData.monthlyExpenses=null;
    calData.holdingPeriod=null;
	var totalExpense;
	var totalCost;
    calData.saleValue=null;
	calData.saleClosingCost=null;
	calData.commissionFee=null;
	calData.saleValue=null;
	var totalSale, totalProfit,totalRevenue;


	calData.calculate = function() {
		return calData.afterRepairValue + calData.desiredProfit;
    };

	calData.aquisition = function() {
		totalAquisition = calData.purchaseValue + ((calData.closingCost/100) * calData.purchaseValue);
		return  totalAquisition;
	};

	calData.expense = function() {
		totalExpense = calData.repairCost + (calData.monthlyExpenses * calData.holdingPeriod)
		return totalExpense;
	};

	calData.sales = function() {
		totalSale=(calData.saleValue*calData.commissionFee/100) + calData.saleClosingCost;
		return totalSale;
	}

	calData.cost = function (){
		totalCost= totalAquisition + totalExpense + totalSale;
		return totalCost;
	}

	calData.revenue = function (){
		totalRevenue=calData.saleValue-totalSale;
		return totalRevenue;
	}

	calData.profit = function () {
		totalProfit = totalRevenue - totalCost;
		return totalProfit;
	}

	calData.returns = function (){

	}

    calData.changeView = function(currentStep,nextStep) {

		document.getElementById(currentStep).style.display = "none";
		document.getElementById(nextStep).style.display = "block";

	};




  /*    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 	var total = num1+num2;
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };*/

});
