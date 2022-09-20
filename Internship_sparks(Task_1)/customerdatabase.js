function fillTable() {
    var table = document.getElementById("tab");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("item").value;
    cell2.innerHTML = document.getElementById("item1").value;
    cell3.innerHTML = document.getElementById("quantity").value;
    cell4.innerHTML = document.getElementById("item2").value;
    return false;
}