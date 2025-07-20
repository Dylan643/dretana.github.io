// mark2grade.js
// Function to validate input mark and convert it to a grade

function MarkToGrade() {
  const markInputValue = document.getElementById('mark-input-box').value.trim();
  const validationMessageElement = document.getElementById('validation-message');
  const gradeOutputElement = document.getElementById('grade-output');

  // Clear previous messages
  validationMessageElement.textContent = '';
  gradeOutputElement.textContent = '';

  const markNumber = parseInt(markInputValue, 10);

  if (markInputValue === '') {
    validationMessageElement.textContent = 'Please enter a mark.';
    return;
  }

  if (isNaN(markNumber)) {
    validationMessageElement.textContent = 'Input is not a valid number.';
    return;
  }

  if (markNumber < 0) {
    validationMessageElement.textContent = 'Mark cannot be negative.';
    return;
  }

  if (markNumber > 100) {
    validationMessageElement.textContent = 'Mark cannot exceed 100.';
    return;
  }

  // Determine grade
  let grade = '';
  if (markNumber >= 90) grade = 'A';
  else if (markNumber >= 80) grade = 'B';
  else if (markNumber >= 70) grade = 'C';
  else if (markNumber >= 60) grade = 'D';
  else if (markNumber >= 50) grade = 'E';
  else grade = 'F';

  gradeOutputElement.textContent = `Grade: ${grade}`;
}

/*
* References:
* - I used W3Schools for: JavaScript parseInt: https://www.w3schools.com/jsref/jsref_parseint.asp
* - I used W3Schools for: JavaScript if else statements: https://www.w3schools.com/js/js_if_else.asp
*/
