// staff.js
// Displays staff data and provides sorting by name and salary

const staffDataSet = [
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
  [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
  [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
  [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ]
];

let isNameAsc = true;
let isSalaryAsc = true;

// Render staff table with given dataset
function renderStaffTable(data) {
  const tableBody = document.querySelector('#staff-table tbody');
  tableBody.innerHTML = '';
  data.forEach(staff => {
    const row = document.createElement('tr');
    staff.forEach(detail => {
      const cell = document.createElement('td');
      cell.textContent = detail;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

// Sort by staff name
function sortByName() {
  staffDataSet.sort((a, b) => {
    return isNameAsc ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0]);
  });
  isNameAsc = !isNameAsc;
  renderStaffTable(staffDataSet);
}

// Sort by staff salary
function sortBySalary() {
  staffDataSet.sort((a, b) => {
    const salaryA = parseInt(a[5].replace(/[$,]/g, ''));
    const salaryB = parseInt(b[5].replace(/[$,]/g, ''));
    return isSalaryAsc ? salaryA - salaryB : salaryB - salaryA;
  });
  isSalaryAsc = !isSalaryAsc;
  renderStaffTable(staffDataSet);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  renderStaffTable(staffDataSet);
});

/*
* References:
* - I used MDN for: Array.prototype.sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* - I used W3Schools for: JavaScript querySelector: https://www.w3schools.com/jsref/met_document_queryselector.asp
*/
