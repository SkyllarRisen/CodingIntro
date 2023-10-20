



function showImage(image) {
    var imageElement = document.getElementById(image);
    imageElement.classList.remove('hidden');
}

function hideImage(image) {
    var imageElement = document.getElementById(image);
    imageElement.classList.add('hidden');
}



function testOutput()
{
    console.log("testmebaby");
}

function checkWebsiteStatus(url) //doesnt work, CORS errors
{

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            console.log('Website is online.');
        };
        img.onerror = function() {
            console.log('Website is offline.');
        };
        img.src = url;
}

// Example usage:


