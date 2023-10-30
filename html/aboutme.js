

function initTable()
{
    const dataTable = document.getElementById("dataTable").getElementsByTagName('tbody')[0];


    const fixedData = [
        {
            Name: "Philipp Arnold", 
            Alter: "29",
            Stadt: "Offenbach am Main"
        }
    ];

    fixedData.forEach(function (datensatz) {
        const row = dataTable.insertRow();
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const cityCell = row.insertCell(2);
    
        nameCell.innerHTML = datensatz.Name;
        ageCell.innerHTML = datensatz.Alter;
        cityCell.innerHTML = datensatz.Stadt;
    });

}

initTable();

function fillTable()
{

    const dataTable = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    const data = [
        {
        Name: document.getElementById("Name").value, 
        Alter: document.getElementById("Alter").value,
        Stadt: document.getElementById("Stadt").value
        }
    ];

    data.forEach(function (datensatz) {
        const row = dataTable.insertRow();
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const cityCell = row.insertCell(2);
    
        nameCell.innerHTML = datensatz.Name;
        ageCell.innerHTML = datensatz.Alter;
        cityCell.innerHTML = datensatz.Stadt;
    });

}

