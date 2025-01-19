let totalAmount = 0;

document.getElementById('add-expense').addEventListener('click', function() {
  const name = document.getElementById('expense-name').value.trim();
  const amount = parseFloat(document.getElementById('expense-amount').value);

  if (name && amount && amount > 0) {
    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${name}: $${amount.toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      totalAmount -= amount;
      document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
      expenseList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    expenseList.appendChild(listItem);

    totalAmount += amount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
  }
});
