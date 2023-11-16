//populate member list with default values
function initTable() {
  const fixedData = [
    {
      Name: "blabla",
      Alter: "blubb",
      Stadt: "blibb",
    },
  ];

  addMember(fixedData);
}

//add member by reading input form on submit
function fillTable() {
  const data = [
    {
      Name: document.getElementById("Name").value,
      Alter: document.getElementById("Alter").value,
      Stadt: document.getElementById("Stadt").value,
    },
  ];

  addMember(data);
}

//push member to member list
function addMember(data) {
  //get table handle to add row
  const dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  //forEach {} in data, create row
  data.forEach(function (object) {
    const row = dataTable.insertRow();
    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    const cityCell = row.insertCell(2);

    //add onclick functionality
    row.onclick = function () {
      showData(object);
    };

    //fill cell with actual data
    nameCell.innerHTML = object.Name;
    ageCell.innerHTML = object.Alter;
    cityCell.innerHTML = object.Stadt;
  });
}

// show additional list data on click
function showData(data) {
  const container = document.getElementById("steckbrief");
  container.innerHTML =
    '<ul class="column"><li>Name:</li><li>Alter:</li><li>Stadt:</li></ul> <ul class="column" id="column2"></ul>';
  var uList = document.getElementById("column2");
  const newCells = [
    document.createElement("li"),
    document.createElement("li"),
    document.createElement("li"),
  ];
  newCells[0].appendChild(document.createTextNode(data.Name));
  newCells[1].appendChild(document.createTextNode(data.Alter));
  newCells[2].appendChild(document.createTextNode(data.Stadt));

  newCells.forEach(function (cell) {
    uList.append(cell);
  });

  //extend content box and display close button
  document.getElementById("steckbrief").style.height = "250px";
  document.getElementById("closeButton").classList.remove("hidden");
}

//close additional list on button click
function closeData() {
  //delete everything in container
  const container = document.getElementById("steckbrief");
  container.innerHTML = "";

  //shrink content box and hide close button
  container.style.height = "0px";
  document.getElementById("closeButton").classList.add("hidden");
}

//calls initTable to populate member list with default values
initTable();
