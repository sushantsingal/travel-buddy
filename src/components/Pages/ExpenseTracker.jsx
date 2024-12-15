import React, { useState, useEffect } from "react";

function ExpenseTracker() {

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [expenseDetails, setExpenseDetails] = useState({
    description: "",
    amount: "",
    type: "debit",
  });

  const addExpense = () => {
    if (expenseDetails.description && expenseDetails.amount && expenseDetails.type) {
      const updatedExpenses = [...expenses, expenseDetails];
      setExpenses(updatedExpenses);
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); 
      setExpenseDetails({ description: "", amount: "", type: "debit" }); 
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const calculateTotal = (type) => {
    return expenses
      .filter((expense) => expense.type === type)
      .reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);
  };

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  return (
    <section className="expense-tracker">
      <h1>Expense Tracker</h1>
      <div className="form-list">
        <div className="first">
          <input
            type="text"
            placeholder="Description"
            value={expenseDetails.description}
            onChange={(e) =>
              setExpenseDetails({ ...expenseDetails, description: e.target.value })
            }
            className="form"
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseDetails.amount}
            onChange={(e) =>
              setExpenseDetails({ ...expenseDetails, amount: e.target.value })
            }
            className="form"
          />
        </div>
        <select
          value={expenseDetails.type}
          onChange={(e) =>
            setExpenseDetails({ ...expenseDetails, type: e.target.value })
          }
          className="form"
        >
          <option value="debit">Debit (Spent)</option>
          <option value="credit">Credit (Earned)</option>
        </select>
        <button onClick={addExpense} className="btn1">
          Add Expense
        </button>
      </div>

      <div className="tracker-display">
        <h2 className="expense-net">Net Balance: ${calculateTotal("credit") - calculateTotal("debit")}</h2>
        <h2>Total Debit (Spent): ${calculateTotal("debit")}</h2>
        <h2>Total Credit (Earned): ${calculateTotal("credit")}</h2>
      </div>

      <ul className="list">
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount} ({expense.type})
            <button onClick={() => deleteExpense(index)} className="btn2">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExpenseTracker;
