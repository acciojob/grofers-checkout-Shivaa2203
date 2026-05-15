const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 let prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach((item) => {
        total += Number(item.textContent);
    });

    let table = document.querySelector("table");

    let newRow = document.createElement("tr");

    let newCell = document.createElement("td");

    newCell.colSpan = 2;

    newCell.textContent = total;

    newRow.appendChild(newCell);

    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

