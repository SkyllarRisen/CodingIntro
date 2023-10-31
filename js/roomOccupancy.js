async function loadJson()
{

    let jsonData;

try
{
    const response = await fetch('https://uniapi.provadis.de/getactualrooms');

    if(!response.ok)
    {
        throw new Error('Cant load data.');
    }

    jsonData = await response.json();
}
catch(error)
{
    console.error('Error:', error);
}

    return jsonData;

}


async function displayJson()
{
    const result = await loadJson();
    addMember(result);
}

displayJson();

//push member to member list
function addMember(data)
{
    //get table handle to add row
    const dataTable = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    //forEach {} in data, create row
    data.forEach(function (object) {

        //skip if not relevant
        if(!object.subtitle.includes("BIN-T23-F-2")) {
           return; 
        }
        
        //create table
        const row = dataTable.insertRow();

        const time = row.insertCell(0);
        const title = row.insertCell(1);
        const building = row.insertCell(2);
        const room = row.insertCell(3);
        const instructor= row.insertCell(4);
        
        //fill cell with actual data   
        time.innerHTML = object.start.slice(11,16) + " - " + object.end.slice(11,16);
        title.innerHTML = object.displaytitle;
        building.innerHTML = object.buildingname;
        room.innerHTML = object.roomname + " / " + object.roomalias;
        instructor.innerHTML = object.instructorname;

    });
}