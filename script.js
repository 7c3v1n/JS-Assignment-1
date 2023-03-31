const account = {
    accountName: "7c3v1n",
    income: 0,
    expenses: 0,
    getSummary: function () {
      return alert(`This month's income is: ${this.income} kr`);
    },

    addIncome: function () {
      const incomeValue = parseFloat(prompt("How much was your income?"));
      if (incomeValue <= 0 || isNaN(incomeValue)) {
        alert("Error");
        account();
      } else {
        this.income += incomeValue;
        alert(`Your account balance is: ${this.income} kr`);
        account();
      }
    },

    addExpenses: function () {
      const depositValue = parseFloat(prompt("How much did you spend?"));
      if (depositValue <= 0 || depositValue === "" || isNaN(depositValue)) {
        alert("Error");
        account();
      } else if (depositValue > this.income) {
        alert("That's beyond your avaiable budget");
        account();
      } else {
        this.income -= depositValue;
        alert(`Now your account balance is: ${this.income} kr`);
        account();
      }
    },

    getAccountName: function() {
      return alert(`Your account name: ${this.accountName}`);
    },

    listAllExpenses: function () {
      return alert(`This month's expenses value is: ${this.expenses} kr`);
    }
      
  }
  
  function menu() {
    
    const choiceMenu = prompt("1.) View available amount 2.) Add income 3.) Add expense 4.) Display account holder 5.) Display Expenses");
  
    if (choiceMenu === "1") {
      account.getSummary();
      expenses();
    } else if (choiceMenu === "2") {
      account.addIncome();
    } else if (choiceMenu === "3") {
      account.addExpenses();
    } else if (choiceMenu === "4") {
      account.getAccountName();
      expenses();
    } else if (choiceMenu === "5") {
      account.listAllExpenses();
    } else {
      alert("Choose between 1-5");
      expenses()
    }
  }
  menu()