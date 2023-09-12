function Findmyloc() {
    let curloc = document.querySelector("#cur_location");
    let pre_location = document.querySelector("#pre_location");

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiurl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        fetch(geoApiurl)
            .then((res) => res.json())
            .then((data) => {
                if (data.principalSubdivision && data.countryName && data.city) {
                    const city = data.city;
                    const province = data.principalSubdivision;
                    const country = data.countryName;
                    const locationText = `📍 ${city}, ${province}, ${country}`;

                    // Create a new list item
                    const listItem = document.createElement("li");
                    listItem.textContent = locationText;

                    // Append the new location to the pre_location list
                    pre_location.appendChild(listItem);

                    // Update the current location display
                    curloc.innerHTML = locationText;

                    savedata()
                }
            });
    };

    const error = () => {
        curloc.innerHTML = `Unable to search your current location`;
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector("#addloc").addEventListener("click", Findmyloc);


// logout btn

document.querySelector("#logout").addEventListener("click",()=>{
    window.location.href="Login.html";
})

//task panal
document.querySelector("#task").addEventListener("click",()=>{
    window.location.href="Task.html"
})

function savedata(){
    localStorage.setItem("locdata",pre_location.innerHTML)
}

function showdata(){
    pre_location.innerHTML=localStorage.getItem("locdata")
}
showdata();


