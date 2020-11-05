//validate module
var validate = (function(e){

    e.preventDefault();
    
    var isValid = true;

    //display warning if firstName is not Enter
    if(profile.firstName.value === ""){
        document.getElementById('firstNameError').style.display = "inline";
        document.getElementById('firstNameError').innerHTML="Please Enter First Name";
            isValid = false;
    }
    
    //display warning if lastName is not Enter
    if(profile.lastName.value === ""){
        document.getElementById('lastNameError').style.display = "inline";
        document.getElementById('lastNameError').innerHTML="Please Enter Last Name";
            isValid = false;
    }

    //display warning if address is not Enter
    if(profile.address1.value === ""){
        document.getElementById('address1Error').style.display = "inline";
        document.getElementById('address1Error').innerHTML="Please Enter Address1";
            isValid = false;
    }

    //display warning if city is not Enter
    if(profile.city.value === ""){
        document.getElementById('cityError').style.display = "inline";
        document.getElementById('cityError').innerHTML="Please Enter City";
            isValid = false;
    }

    //display warning if province is not Enter
    if(profile.province.value === ""){
        document.getElementById('provinceError').style.display = "inline";
        document.getElementById('provinceError').innerHTML="Please Enter Province";
            isValid = false;
    }

    //display warning if country is not Enter
    if(profile.country.value === ""){
        document.getElementById('countryError').style.display = "inline";
        document.getElementById('countryError').innerHTML="Please Enter Country";
            isValid = false;
    }

    if(isValid){
        alert("Thank You !");
    }

    return isValid;
    
});
