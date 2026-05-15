const getSumBtn = document.createElement("button");

getSumBtn.innerText = "Get Total Price";

document.body.appendChild(getSumBtn);

const getSum = () => {

    let oldRow = document.getElementById("total-row");

    if (oldRow) {
        oldRow.remove();
    }

    let prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach((item) => {
        total += parseInt(item.innerText);
    });

    let table = document.querySelector("table");

    let tr = document.createElement("tr");

    tr.id = "total-row";

    let td = document.createElement("td");

    td.setAttribute("colspan", "2");

    td.innerText = total;

    tr.appendChild(td);

    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);