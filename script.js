const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {

    let prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach((item) => {
        total = total + Number(item.innerText.trim());
    });

    let oldRow = document.getElementById("total-row");
    if (oldRow) {
        oldRow.remove();
    }

    let table = document.querySelector("table");

    let tr = document.createElement("tr");

    tr.id = "total-row";

    let td = document.createElement("td");

    td.id = "ans";   // VERY IMPORTANT

    td.colSpan = 2;

    td.innerText = total;

    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);