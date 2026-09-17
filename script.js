// SpendWise Dashboard - Week 6 JavaScript
let transactions= JSON.parse(localStorage.getItem('spendwise_data')) || [];
let monthlyBudget = 50000;

const form = document.getElementById('transactionForm');
const list = document.getElementById('transactionList');

function calculateTotals() {
    let totalExpense = 0;
    let totalIncome = 0;
    transactions.forEach(t => {
        if (t.type === 'expense') totalExpense += t.amt;
        else totalIncome += t.amt;
    });
    document.getElementById('monthlySpend').textContent = 'KES ' + totalExpense.toLocaleString();
    const remaining = monthlyBudget - totalExpense;
    document.getElementById('remainingBudget').textContent = 'KES ' + remaining.toLocaleString();
    const countEl = document.getElementById('transactionCount');
    if(countEl) countEl.textContent = transactions.length + ' transactions';
    localStorage.setItem('spendwise_data', JSON.stringify(transactions));
}

function renderTransactions() {
    if (!list) return;
    list.innerHTML = '';
    transactions.slice().reverse().forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.desc} | ${t.cat} | KES ${t.amt} | ${t.type}`;
        li.style.padding = '8px'; li.style.borderBottom = '1px solid #eee';
        list.appendChild(li);
    });
}

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const descInput = document.getElementById('desc').value;
        const categoryInput = document.getElementById('category').value;
        const amountInput = parseFloat(document.getElementById('amount').value);
        const typeInput = document.getElementById('type').value;
        const newTransaction = { desc: descInput, cat: categoryInput, amt: amountInput, type: typeInput };
        transactions.push(newTransaction);
        calculateTotals();
        renderTransactions();
        form.reset();
    });
}
calculateTotals();
renderTransactions();
