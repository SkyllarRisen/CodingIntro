



function showImage(image) {
    var imageElement = document.getElementById(image);
    console.log("show image: " + image);
    imageElement.classList.remove('hidden');
}

function hideImage(image) {
    var imageElement = document.getElementById(image);
    console.log("hide image: " + image);
    imageElement.classList.add('hidden');
}

function showButton() {
    showImage("spongebob");
    var oldButton = document.querySelector("button");
    var newButton = document.createElement("button");
    newButton.innerHTML = "Hide the bob";
    newButton.addEventListener("click", hideButton);
    oldButton.parentNode.replaceChild(newButton, oldButton);
}

function hideButton() {
    hideImage("spongebob");
    var oldButton = document.querySelector("button");
    var newButton = document.createElement("button");
    newButton.innerHTML = "Show the bob";
    newButton.addEventListener("click", showButton);
    oldButton.parentNode.replaceChild(newButton, oldButton);
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


