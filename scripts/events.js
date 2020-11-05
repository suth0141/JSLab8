//form element events

//remove warning if firstName has value
document.getElementById("fname").addEventListener("blur", function(){
    if(this.value !== ""){
        firstNameError.innerHTML = "";
        firstNameError.style.display = "none";
    }
});

//remove warning if lastName has value
document.getElementById("lname").addEventListener("blur", function(){
    if(this.value !== ""){
        lastNameError.innerHTML = "";
        lastNameError.style.display = "none";
    }
});

//remove warning if address1 has value
document.getElementById("address1").addEventListener("blur", function(){
    if(this.value !== ""){
        address1Error.innerHTML = "";
        address1Error.style.display = "none";
    }
});

//remove warning if city has value
document.getElementById("city").addEventListener("blur", function(){
    if(this.value !== ""){
        cityError.innerHTML = "";
        cityError.style.display = "none";
    }
});

//remove warning if province has value
document.getElementById("province").addEventListener("blur", function(){
    if(this.value !== ""){
        provinceError.innerHTML = "";
        provinceError.style.display = "none";
    }
});

//remove warning if country has value
document.getElementById("country").addEventListener("blur", function(){
    if(this.value !== ""){
        countryError.innerHTML = "";
        countryError.style.display = "none";
    }
});

document.profile.addEventListener("submit", validate);
