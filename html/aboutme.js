
//populate member list with default values
function initTable()
{

    const fixedData = [
        {
            Name: "Philipp Arnold", 
            Alter: "29",
            Stadt: "Offenbach am Main"
        }
    ];

    addMember(fixedData);

}

//add member by reading input form on submit
function fillTable()
{

    const data = [
        {
        Name: document.getElementById("Name").value, 
        Alter: document.getElementById("Alter").value,
        Stadt: document.getElementById("Stadt").value
        }
    ];

    addMember(data);

}

//push member to member list
function addMember(data)
{
    //get table handle to add row
    const dataTable = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    //forEach {} in data, create row
    data.forEach(function (datensatz) {

        const row = dataTable.insertRow();
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const cityCell = row.insertCell(2);

        //add onclick functionality
        row.onclick = function() {
            showData(datensatz.Name, datensatz.Alter, datensatz.Stadt);
        };
        
        //fill cell with actual data
        nameCell.innerHTML = datensatz.Name;
        ageCell.innerHTML = datensatz.Alter;
        cityCell.innerHTML = datensatz.Stadt;
    });
}
    
    


// show additional list data on click
function showData(Name, Alter, Stadt) {
  
    const insert = document.getElementById("steckbrief");
    insert.innerHTML = `<ul><li>Name: ${Name}</li><li>Alter: ${Alter}</li><li>Stadt: ${Stadt}</li></ul>`;


}

//calls initTable to populate member list with default values
initTable();

