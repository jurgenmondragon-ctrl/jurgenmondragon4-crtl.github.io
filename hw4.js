/*
   Name:Jurgen Mondragon
   Date created: 2/02/2026
   Date modified: 5/6/2026
   Purpose: Homework 4 JS
*/

//dynamic date js code
const d= new Date();
let text=d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

// first name validation
function validateFname() {
   fname = document.getElementById("fname").value.trim();
   var namePattern =/^[a-zA-Z'-]+$/;
   //checking firstname field 
   if (fname == "") {
      document.getElementById("fname-error").innerHTML = "First name field cant be empty";
      return false;
   } else if (fname !="") {
       if (!fname.match(namePattern)) { //checks if the firstname matches the pattern
          document.getElementById("fname-error").innerHTML = "letters, apostrophes, and dashes only";
          return false;
   } else if (fname.length < 2) { // checks if the first name has at least 2 characters
         document.getElementById("fname-error").innerHTML = "first name cannot be less than 2 characters.";  
          return false;
   } else if (fname.length > 30) { // checks if the first name is  more than 30 characters
         document.getElementById("fname-error").innerHTML = "first name cannot be more than 30 characters.";  
          return false;
   } else { 
         document.getElementById("fname-error").innerHTML = "";  
          return true;
       }

   }
}

   //middle initial validation
   function validateMname() {
      let mname = document.getElementById("mname").value;
      const namePattern= /^[A-Z]$/;
      //turns middle initial uppercase
      mname = mname.toUpperCase();
      document.getElementById("mname").value =mname;
      if (!mname.match(namePattern)) { //checks if middle initial matches pattern
         document.getElementById("mname-error").innerHTML = "middle initial has to be a single uppercase letter.";
         return false;
      } else{
         document.getElementById("mname-error").innerHTML= "";
         return true;
      }
   }   
          

    //last name validation
    function validateLname() {
       lname = document.getElementById("lname").value.trim();
       var namePattern = /^[a-zA-Z']+$/;
       //checking if the field is empty
       if (lname == "") { 
          document.getElementById("lname-error").innerHTML = "last name field cannot be empty";
          return false;
       }  else if(lname != "") { //check if last name matches the pattern
          if (!lname.match(namePattern)) {
          document.getElementById("lname-error").innerHTML = "letters, apostrophes, and dashes only.";
          return false;
       }  else if(lname.length < 2) { //check if the last name has 2 characters
          document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
          return false;
       }   else if(lname.length > 30) { //check if the last name deosnt have more than 30 characters
          document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
          return false;
       }  else {
          document.getElementById("lname-error").innerHTML= "";
          return true;
       }
       }   
          
    }
    
    // validating date of birth 
    function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() -120);

    if (Date > new Date()) {
       document.getElementById("dob-error").innerHTML =
       "Date cannot be in there.";
       dob.value="";
       return false;
    } else if(Date < new Date(maxDate)) {
       document.getElementById("dob-error").innerHTML =
       "date cannot be more than 120 years ago.";
       dob.value="";
       return false;
    }  else {
       document.getElementById("dob-error").innerHTML = "";
       return true;
    }
 }
       
 //Validating socialsec
   function validateSocialsec() {
      const socialsec = document.getElementById("socialsec").value;

      // socialsec patttern
      const socialsecR =/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

      if (!socialsecR.test(socialsec)) {
         document.getElementById("socialsec-error").innerHTML =
         "please enter a valid social security number.";
         return false;
      } else {
         document.getElementById("socialsec-error").innerHTML = "";
         return true; 
      } 
   }
      
    // Address 1 validation 
   function validateAddress() {
      var ad1 = document.getElementById("address1").value;
      console.log(ad1);
      console.log(ad1.length);

      if(ad1.length < 2) {
         document.getElementById("address1-error").innerHTML =
         "please enter your address on address line";
         return false;
      } else {
          document.getElementById("address1-error").innerHTML ="";
          return true;
      }
   }  
   // city validation
   function validateCity() {
      city = document.getElementById("city").value.trim();

      if(!city) {
         document.getElementById("city-error").innerHTML = "city cannot be left blank"
         return false;

      } else { 
         document.getElementById("city-error").innerHTML ="";
         return true;
      }
   }

   // zip code validation
   function validateZpcode() {
      const zipInput = document.getElementById("zpcode");
      let zip = zipInput.value.replace(/[^\d-]/g,""); //removes any non-number and non-dash characters\

      if(!zip) {
         document.getElementById("zpcode-error").innerHTML =
            "zip code cant be blank";
          return false;

      }
      if ( zip.length > 5) {
         zip = zip.slice(0,5) + "-" + zip.slice(5,9); //gets rid of all digits after 5 numbers
      } else { 
         zip = zip.slice(0,5);
      }

      zipInput.value =zip; 
      document.getElementById("zpcode-error").innerHTML ="";
      return true;
   }

   // code for validating email
   function validateEmail() {
      email = document.getElementById("email").value;
      var emailR=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression pattern thing for email

      if (email == "") {
         document.getElementById("email-error").innerHTML =
          "email address cant be empty";
            return false;
      } else if(!email.match(emailR)) {
         document.getElementById("email-error").innerHTML =
         "please enter a valid email address";
         return false;
      } else {
         document.getElementById("email-error").innerHTML = "";
         return true;
      }

   }
    // validating phone number
    function validatePhonenum() {
       const  phoneInput = document.getElementById("phonenum");
       const phone = phoneInput.value.replace(/\D/g,""); // removes all the non-number characters

       if (phone.length !=10) {
          document.getElementById("phonenum-error").innerHTML = 
          "phone number cannot be left blank";
           return false;
       }

       const formattedPhone =
       phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
       phoneInput.value = formattedPhone;
       document.getElementById("phonenum-error").innerHTML = "";
       return true;
    }

    // username validation
    function validateUsername() {
       username = document.getElementById("username").value;

       //converts username to lowercase
       username = username.toLowerCase();

       //display username in lowercase

      document.getElementById("username").value = username;

      if (username.length === 0) {
         document.getElementById("username-error").innerHTML =
         "username cant be empty";
         return false;
      }

      //checks that username doesnt start with a number
       if (!isNaN(username.charAt(0))){
          document.getElementById("username-error").innerHTML =
         "username cant start with a number";
          return false;
       }

       //checks if username is only made up of only letter, number and underscores
       let regex = /^[a-zA-Z0-9]+$/;
       if (!regex.test(username)) {
          document.getElementById("username-error").innerHTML =
          "username can only have letters, numbers and underscores";
          return false;
          //checks if the entered username doesnt have 30 characters
       } else if (username.length < 5) {
          document.getElementById("username-error").innerHTML =
          "username cannot be less than 5 characters";
          return false;
       } else if (username.length > 30) { 
          document.getElementById("username-error").innerHTML =
          "username cant exceed 30 characters";
          return false;
       } else { //if all above is correct then
          document.getElementById("username-error").innerHTML ="";
          return true;
       }
   }
            
     // password validation  
     function validatePass() {
        const pass = document.getElementById("pass").value;
        const username = document.getElementById("username").value;

        //sets up and initializes array
        const errorMessage = [];
   
       //checks lowercase
        if(!pass.match(/[a-z]/)) {
           errorMessage.push("enter at least one lowercase letter");
        }
        if(!pass.match(/[A-Z]/)) {
           errorMessage.push("enter at least one uppercase letter");
        }
        if(!pass.match(/[0-9]/)) {
           errorMessage.push("enter at least one number");
        }
        if(!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
           errorMessage.push("enter at least one special character");
        }
        if(pass == username || pass.includes(username)) {
           errorMessage.push("password cannot contain username");
        }

        const errorContainer = document.querySelector(".pass-message");
        errorContainer.innerHTML = errorMessage
        .map(msg => `<span>${msg}</span><br>`)
        .join("");
     }

     // confirm password 
    function confirmPass() {
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("retpass").value;

    if (pass1 !== pass2){
        document.getElementById("pass2-error").innerHTML =
        "Password do not match";
        return false;
    } else {
        document.getElementById("pass2-error").innerHTML =
        "Password match";
        return true;
    }
}
     

      // review button
      function reviewInput() {
         var formcontent = document.getElementById("signup");
         var formoutput = "<table class ='output'><tr><th colspan ='2'>Review Your Information:</th></tr>";

         for (var i = 0; i <formcontent.elements.length; i++) {
            var el = formcontent.elements[i];
            var datatype = el.type;
            var name = el.name;
            var value = el.value;

            //ignore elements with no name
            if(!name) continue;

            switch (datatype) {
               case "checkbox":
                  if (el.checked) {
                     formoutput += "<tr><td align='right'>"+ name +"</td>";
                     formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                  }
                  break;

                case "radio":
                  if (el.checked) {
                     formoutput += "<tr><td align='right'>"+ name +"</td>";
                     formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                  }
                  break;
                  
                  case "range":
               
                  if (value !== "0") {
                     formoutput += "<tr><td align='right'>"+ name +"</td>";
                     formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                  }
                  break;

               case "button":
               case "submit":
               case "reset":
                  //skip
                  break;
               default:
                  if (value !== "") {
                     formoutput += "<tr><td align='right'>" + name + "</td>";
                     formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                  }
            }
         }

         formoutput += "</table>";
         document.getElementById("showInput").innerHTML = formoutput;
      }

      // remove user input
      function removeReview() {
         document.getElementById("showInput").innerHTML ="";
      }

      //show alert box when needed
      function showAlert(){
         var alertBox = document.getElementById("alert-box");
         var closeAlert = document.getElementById("close-alert");

         alertBox.style.display = "block";
         closeAlert.onclick = function() {
            alertBox.style.display = "none";
         };
      }

      //validate everything on the form
      function validateEverything() {
         let valid = true;

         if (!validateFname()) {
            valid = false;
         }
         if (!validateMname()) {
            valid = false;
         }
         if (!validateLname()) {
            valid = false;
         }
         if (!validateDob()) {
            valid = false;
         }
         if (!validateSocialsec()) {
            valid = false;
         }
         if (!validateAddress()) {
            valid = false;
         }
         if (!validateCity()) {
            valid = false;
         }
         if (!validateZpcode()) {
            valid = false;
         }
         if (!validateEmail()) {
            valid = false;
         }
         if (!validatePhonenum()) {
            valid = false;
         }
         if (!validateUsername()) {
            valid = false;
         }
         if (!validatePass()) {
            valid =false;
         }
         if (valid) {
            document.getElementById("submit").disabled = false;
         }else{
            showAlert();
         }
      }
//cookie expire
function setCookie(name, cvalue,expiryDays) {
      var day = new Date();
      day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 *1000));
      var expires = "expires=" + day.toUTCString();
      document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
//gets the cookie by name
function getCookie(name) {
   var cookieName = name + "=";
   var cookies = document.cookie.split(';');

   for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if(cookie.indexOf(cookieName)==0) {
           return cookie.substring(cookieName.length, cookie.length);
        }
   }
   return "";
}
var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mname", cookieName: "middleName"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dob"},
    {id:"socialsec", cookieName: "socialSec"},
    {id:"address1", cookieName: "addressOne"},
    {id:"city", cookieName: "city"},
    {id:"zpcode", cookieName: "zipCode"},
    {id:"email", cookieName: "email"},
    {id:"phonenum", cookieName: "phoneNum"},
    {id:"username", cookieName: "userName"},
];

inputs.forEach(function (input) {
   var inputElement = document.getElementById(input.id);

   //Prefill input fields
   var cookieValue = getCookie(input.cookieName);
   if (cookieValue !== "") {
     inputElement.value = cookieValue;
      }
});

//great the user with their name & message if cookie is set
var firstName = getCookie("firstName");
if (firstName !== "") {
   document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
   document.getElementById("welcome2").innerHTML =
      "<a href='#' id='new-user'>Not "+ firstName + "? Click here to start a new form.</a>";

document.getElementById("new-user").addEventListener("click", function () {
   inputs.forEach(function (input) {
      setCookie(input.cookieName, "", -1);
    });
   location.reload();
    });
}
//Toggles cookie storage based on the "Remember Me" checkbox state.
document.getElementById("remember-me").addEventListener("change", function () {
   const rememberMe = this.checked;

   if(!rememberMe) {
      // If "Remember Me" is unchecked, delete cookies 
      deleteAllCookies();
      console.log("All cookies deleted because 'Remember Me' is unchecked.");
   } else { 
      //if remember me is checked or unchecked, save cookies
      inputs.forEach(function (input) {
         const inputElement = document.getElementById(input.id);
         if (inputElement.value.trim() !=="") {
            setCookie(input.cookieName, inputElement.value, 30);
         }
      });
      console.log("cookies saved because 'Remember Me' is checked.");
   }
});
//gets rid of all stored cookies by having their expiring date be in the past
function deleteAllCookies(){
   document.cookie.split(";").forEach(function (cookie) {
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
   });
}
//deletes cookies if the remember me box is unchecked when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
   const rememberMe = document.getElementById("remember-me").checked;

   if(!rememberMe){
      deleteAllCookies();
   }
});
   






   

