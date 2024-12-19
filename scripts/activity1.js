// const tableBody = document.querySelector("#multiplicationTable tbody");


// for (let i = 0; i <= 10; i++) {
//   const row = document.createElement("tr");
//   const multiplierCell = document.createElement("td");
//   const resultCell = document.createElement("td");

//   multiplierCell.textContent = `2 x ${i}`;
//   resultCell.textContent = 2 * i;

//   row.appendChild(multiplierCell);
//   row.appendChild(resultCell);
//   tableBody.appendChild(row);
// }

// for (let i = 2; i <= 21; i += 2) {
//     document.write(`<p>${i}</p>`);
// }

function multiTable(){
    let num = propmt("Enter the number of the table");
    let result = 0;

    document.write(`<h1> Table of ${num} x ${i} = ${result} </h1>`);

    for (let i = 2; i <= 10; i += 2) {
        result = num * 1;
      document.write(`<p> ${num} x ${i} = ${result} </p>`);
    }


}

let students = ["Jack", "Carl", "Leon", "Ashley", "Abel", "Lisa"];
let ages = [30, 23, 12, 16, 72, 81];

students[6] = "Lisa Simpson";
ages[4] = 45;

function generateTable(students, ages) {
  // Create a table element
  let table = document.createElement("table");

  // Add table headers
  let thead = table.createTHead();
  let headerRow = thead.insertRow();
  let headers = ["Name", "Age"];
  for (let headerText of headers) {
    let th = document.createElement("th");
    let text = document.createTextNode(headerText);
    th.appendChild(text);
    headerRow.appendChild(th);
  }

  // Add table rows
  let tbody = table.createTBody();
  for (let i = 0; i < students.length; i++) {
    let row = tbody.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let studentName = students[i];
    let studentAge = ages[i] !== undefined ? ages[i] : "N/A";
    cell1.appendChild(document.createTextNode(studentName));
    cell2.appendChild(document.createTextNode(studentAge));
  }

  // Append the table to the container
  document.getElementById("table-container").appendChild(table);
}

// Call the function to generate the table
generateTable(students, ages);

