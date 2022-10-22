const form = document.querySelector("form");
const tableContainer = document.querySelector("#table");
const clickHandler = document.querySelector("#click-handler");
let row = document.querySelector("#row");
let col = document.querySelector("#col");

function renderTable(tableBlock, rowNum, colNum) {
  const table = document.createElement("table");
  for (i = 1; i <= rowNum; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (j = 1; j <= colNum; j++) {
      const td = document.createElement("td");
      table.append(td);
      td.append(`${i} , ${j}`);
    }
  }
  return tableBlock.append(table);
}

function submitHandler(event) {
  event.preventDefault();
  tableContainer.value = "";
  renderTable(tableContainer, parseInt(row.value), parseInt(col.value));
}

form.addEventListener("submit", submitHandler, false);
