document.getElementById("submit").addEventListener("click", calculateAmortization);

function calculateAmortization() {

  // Gets the principal, interestRate, and years value from user inputs
  var principal = parseFloat(document.getElementById("principal").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);
  var years = parseFloat(document.getElementById("years").value);

  // Calculates the monthly interest rate in addition to the amount of months
  var monthlyInterestRate = interestRate / 12 / 100;
  var months = years * 12;

  // Calculates the monthly payment 
  var monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -months));

  var table = document.createElement('table'); // Create the table element
  table.id = "financial-information"; // Sets the id of the table to "financial-information"

  // Create the table headers
  var headerRow = document.createElement('tr');
  var headers = ['Year', 'Interest', 'Principal', 'Remaining Balance'];
  headers.forEach(function(headerText) {
    var headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // Generate the amortization schedule rows by creating a div with an id "amortizationSchedule"
  var amortizationSchedule = '';
  for (let i = 0; i < months; i++) {
    let interest = principal * monthlyInterestRate;
    let principalPayment = monthlyPayment - interest;
    let remainingBalance = principal - principalPayment;

    var row = document.createElement('tr');
    var yearCell = document.createElement('td');
    yearCell.textContent = Math.floor((i + 1) / 12) + 1;
    var interestCell = document.createElement('td');
    interestCell.textContent = interest.toFixed(2);
    var principalCell = document.createElement('td');
    principalCell.textContent = principalPayment.toFixed(2);
    var balanceCell = document.createElement('td');
    balanceCell.textContent = remainingBalance.toFixed(2);

    row.appendChild(yearCell);
    row.appendChild(interestCell);
    row.appendChild(principalCell);
    row.appendChild(balanceCell);

    table.appendChild(row);

    principal = remainingBalance;
  }

  var amortizationTableContainer = document.getElementById('amortizationSchedule');
  amortizationTableContainer.innerHTML = ''; // Clear any existing content
  amortizationTableContainer.appendChild(table); // Append the table to the container
}
