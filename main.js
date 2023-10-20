




function showImage() {
    var imageElement = document.getElementById('myImage');
    imageElement.classList.remove('hidden');
}


function testOutput()
{
    console.log("testmebaby");
}

function checkWebsiteStatus(url, callback) 
{
    fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
    .then(response => {
        if (response.status === 200) {
            callback(true);
        } else {
            callback(false);
        }
    })
    .catch(() => {
        console.log("error.");
        callback(false);
    });
}

// Example usage:
const websiteUrl = 'https://pfsense.arnold-of.de:10443';
checkWebsiteStatus(websiteUrl, (isOnline) => {  if (isOnline) {console.log('Website is online.');} else {console.log('Website is offline.');}});
console.log("imhere");