const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    let prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach((item) => {
        total += Number(item.textContent);
    });

    // remove old result if exists
    let old = document.getElementById("ans");
    if (old) {
        old.parentElement.remove();
    }

    let table = document.querySelector("table");

    let tr = document.createElement("tr");

    let td = document.createElement("td");

    td.id = "ans";              

    td.textContent = total;

    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);