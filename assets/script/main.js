// document.addEventListener("DOMContentLoaded", function () {
  
 
// // // login signup and admin login start
let loginModal = document.querySelector("#loginModal");
let signupModal = document.querySelector("#signupModal");
let loginBtn = document.querySelector("#loginBtn");
let signupBtn = document.querySelector("#signupBtn");
let loginSubmit = document.querySelector("#loginSubmit");
let signupSubmit = document.querySelector("#signupSubmit");
let loggedInArea = document.querySelector("#loggedInArea");
let loggedInUsername = document.querySelector("#loggedInUsername");
let logoutBtn = document.querySelector("#logoutBtn");
let signupUsername = document.querySelector("#signupUsername");
let signupPassword = document.querySelector("#signupPassword");
let loginUsername = document.querySelector("#loginUsername");
let loginPassword = document.querySelector("#loginPassword");

let loginModalAdmin = document.querySelector("#loginModalAdmin");
let loginSubmitAdmin = document.querySelector("#loginSubmitAdmin");
let loginUsernameAdmin = document.querySelector("#loginUsernameAdmin");
let loginPasswordAdmin = document.querySelector("#loginPasswordAdmin");
let adminLogoutBtn = document.querySelector("#adminLogoutBtn");

let nameEntries = JSON.parse(localStorage.getItem("entries"));

let bookNowBtn = document.querySelector("#bookNowBtn")
let bookNowBtnServices = document.querySelector("#bookNowBtnServices")
let bookNowBtnFooter = document.querySelector("#bookNowBtnFooter")

bookNowBtn.disabled = true
bookNowBtnServices.disabled = true
bookNowBtnFooter.disabled = true

let bookingsContainer = document.querySelector("#bookingsContainer")
let bookingsDisplay = document.querySelector("#bookingsDisplay")

let applicantFullName = document.querySelector("#applicantFullName");
let applicantContactNumber = document.querySelector("#applicantContactNumber");
let uploadCV = document.querySelector("#uploadCV")
let applyBtn = document.querySelector("#applyBtn");
let heroSection = document.querySelector("#heroSection");
let serviceSection = document.querySelector("#serviceSection");
let jobOppurtunities = document.querySelector("#jobOppurtunities");
let footerSection = document.querySelector("#footerSection");


applicantFullName.disabled = true;
applicantContactNumber.disabled = true;
uploadCV.disabled = true;
applyBtn.disabled = true;


let applicantDisplayContainer = document.querySelector("#applicantDisplayContainer")

logoutBtn.style.display = "none";
loginBtn.style.display = "block";
signupBtn.style.display = "block";
applicantDisplayContainer.style.display = "none"


//show loginAdmin modal
window.addEventListener("keydown", (event) => {
  // console.log("you press");
  if (event.keyCode === 13 && event.altKey){
    loginModalAdmin.style.display = "block";
    bookNowBtnServices.style.display = "none"
  }

});


// Show login modal
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginModal.style.display = "block";
  bookNowBtnServices.style.display = "none"
});

// Show signup modal
signupBtn.addEventListener("click", function (event) {
  event.preventDefault();
  signupModal.style.display = "block";
  bookNowBtnServices.style.display = "none"
});

// Close modals
let modals = document.querySelectorAll(".modal");
for ( let modal of modals) {
    let closeBtn = modal.querySelector(".login-signup-admin-modal-close");
    closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    bookNowBtnServices.style.display = "block"
  });
}


let addUser = () => {
  
  if(nameEntries ==  null) {
    nameEntries = [];
  }

  let userItem = {
    userName: signupUsername.value,
    userPassword: signupPassword.value
  }

  signupModal.style.display = "none";
  alert("You are Registered");
  loginModal.style.display = "block";
  nameEntries.push(userItem);
  console.log(nameEntries);
  localStorage.setItem("entries", JSON.stringify(nameEntries));

}

signupSubmit.addEventListener("click", addUser);

let isLoggedIn =JSON.parse(localStorage.getItem("isLoggedIn")) || false;
let isAdminLoggedIn = JSON.parse(localStorage.getItem("isAdminLoggedIn")) || false;

let loginInUser = () => {
  if (nameEntries) { 
    let enteredUsername = loginUsername.value;
    let enteredPassword = loginPassword.value;
    
  
    for (let i = 0; i < nameEntries.length; i++) {
      if (enteredUsername === nameEntries[i].userName && enteredPassword === nameEntries[i].userPassword) {
        alert("Login successful!");
        
        loggedInUsername.textContent = loginUsername.value;
        document.querySelector("#signupBtn").disabled = true;
        document.querySelector("#loginBtn").disabled = true;
        loginModal.style.display = "none";
        logoutBtn.style.display = "block";
        isLoggedIn = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn)); 

        bookNowBtn.disabled = false;
        bookNowBtnServices.disabled = false;
        bookNowBtnFooter.disabled = false;
        applicantFullName.disabled = false;
        applicantContactNumber.disabled = false;
        uploadCV.disabled = false;
        applyBtn.disabled = false;
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        applicantDisplayContainer.style.display = "none"
      
        return; 
      }
    }
    
    
    alert("Invalid username or password");
  } else {
    alert("No registered users. Please sign up.");
  }
};

if(isLoggedIn){
  loggedInUsername.textContent = loginUsername.value;
  document.querySelector("#signupBtn").disabled = true;
  document.querySelector("#loginBtn").disabled = true;
  logoutBtn.style.display = "block";
    loginModal.style.display = "none";
    bookNowBtn.disabled = false;
    bookNowBtnServices.disabled = false;
    bookNowBtnFooter.disabled = false;
    applicantFullName.disabled = false;
    applicantContactNumber.disabled = false;
    uploadCV.disabled = false;
    applyBtn.disabled = false;
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    applicantDisplayContainer.style.display = "none";
  
} else {
  loggedInUsername.textContent = loginUsername.value;
}

loginSubmit.addEventListener("click", loginInUser);


logoutBtn.addEventListener("click", function () {
  isLoggedIn = false;
  isAdminLoggedIn = false;
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("isAdminLoggedIn");
  loginModal.style.display = "block";
  loginModalAdmin.style.display = "none";
  loginUsername.value = "";
  loginPassword.value = "";
  loginUsernameAdmin.value = "";
  loginPasswordAdmin.value = "";
  document.querySelector("#signupBtn").disabled = false;
  document.querySelector("#loginBtn").disabled = false;
  logoutBtn.style.display = "none";
  bookNowBtn.disabled = true;
  bookNowBtnServices.disabled = true;
  bookNowBtnFooter.disabled = true;
  applicantFullName.disabled = true;
  applicantContactNumber.disabled = true;
  uploadCV.disabled = true;
  applyBtn.disabled = true;
  applicantDisplayContainer.style.display = "none";
  loginBtn.style.display = "block";
  signupBtn.style.display = "block";
});
adminLogoutBtn.addEventListener("click", function () {
  isLoggedIn = false;
  isAdminLoggedIn = false;
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("isAdminLoggedIn");
  loginModal.style.display = "block";
  loginModalAdmin.style.display = "none";
  loginUsername.value = "";
  loginPassword.value = "";
  loginUsernameAdmin.value = "";
  loginPasswordAdmin.value = "";
  document.querySelector("#signupBtn").disabled = false;
  document.querySelector("#loginBtn").disabled = false;
  logoutBtn.style.display = "none";
  bookNowBtn.disabled = true;
  bookNowBtnServices.disabled = true;
  bookNowBtnFooter.disabled = true;
  applicantFullName.disabled = true;
  applicantContactNumber.disabled = true;
  uploadCV.disabled = true;
  applyBtn.disabled = true;
  applicantDisplayContainer.style.display = "none";
  loginBtn.style.display = "block";
  signupBtn.style.display = "block";
  heroSection.style.display = "block";
  jobOppurtunities.style.display = "block";
  serviceSection.style.display = "block";
  footerSection.style.display = "block";

});



let adminLog = () => {
  if(loginUsernameAdmin.value == "admin" && loginPasswordAdmin.value == "admin123"){
    isAdminLoggedIn = true;
    alert("Admin Sucessfully Login");
    loggedInUsername.textContent = loggedInUsername.value;
     document.querySelector("#signupBtn").disabled = true;
     document.querySelector("#loginBtn").disabled = true;
     loginModalAdmin.style.display = "none";
     loginModal.style.display = "none";
     logoutBtn.style.display = "block"; 
    //  isAdminLoggedIn = true;
    localStorage.setItem("isAdminLoggedIn", JSON.stringify(isAdminLoggedIn));
    applicantDisplayContainer.style.display = "block"
      bookNowBtn.disabled = false;
      bookNowBtnServices.disabled = false;
      bookNowBtnFooter.disabled = false;
      applicantFullName.disabled = false;
      applicantContactNumber.disabled = false;
      uploadCV.disabled = false;
      applyBtn.disabled = false;
      heroSection.style.display = "none";
  jobOppurtunities.style.display = "none";
  serviceSection.style.display = "none";
  footerSection.style.display = "none";
      // isAdminLoggedIn = true;
      
     return; 
  }
};

loginSubmitAdmin.addEventListener("click", adminLog);


if (isAdminLoggedIn) {
  loggedInUsername.textContent = isAdminLoggedIn ? "admin" : loginUsername.value; // Set the logged-in username
  document.querySelector("#signupBtn").disabled = true;
  document.querySelector("#loginBtn").disabled = true;
  logoutBtn.style.display = "block";
  loginModal.style.display = "none";
  loginModalAdmin.style.display = "none";
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
  heroSection.style.display = "none";
  jobOppurtunities.style.display = "none";
  serviceSection.style.display = "none";
  footerSection.style.display = "none";
  
} else {

}
// // // login signup and admin login end

// // // booking start

// set map options

var mylatlng = { lat: 14.5995, lng: 120.9842}
var mapOptions = {
    center: mylatlng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}


// create Map

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)

// create a Directions service object to use the route method and get a result for our request 

var directionsService = new google.maps.DirectionsService()

// create a DirectionsRenderer object which we will use to display the route 

var directionsDisplay = new google.maps.DirectionsRenderer()

// bind the directionsRender to the map

directionsDisplay.setMap(map)


let bookingEntries = JSON.parse(localStorage.getItem("bookingEntries"))
console.log(bookingEntries)

let bookingContainer = document.querySelector("#bookingContainer")
let bookingCloseBtn = document.querySelector("#bookingCloseBtn")
let name = document.querySelector("#name")
let vehicleOptions = document.querySelector("#vehicleOptions")
let from = document.querySelector("#from")
let to = document.querySelector("#to")
let calculateBtn = document.querySelector("#calculateBtn")
let fareDisplay = document.querySelector("#fareDisplay")
let bookBtn = document.querySelector("#bookBtn")

// popup
let popup = document.querySelector("#popup")
let closeBtn = document.querySelector("#closeBtn")
let customerDetails = document.querySelector("#customerDetails")

let openBooking = () => {
    bookingContainer.classList.add("show-booking-container")
    bookNowBtnServices.style.display = "none";
    
}

bookNowBtn.addEventListener("click", openBooking)
bookNowBtnServices.addEventListener("click", openBooking)
bookNowBtnFooter.addEventListener("click", openBooking)

let closeBooking = () => {
    bookingContainer.classList.remove("show-booking-container")
    bookBtn.style.visibility = "hidden"
    bookNowBtnServices.style.display = "block"
}

bookingCloseBtn.addEventListener("click", closeBooking)

// function

let calcRoute = () => { 
    // create request
    var request = {
        origin: from.value,
        destination: to.value,
        travelMode: google.maps.TravelMode.DRIVING, // WALKING, BYCYCLING AND TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    // Pass the request to the route method
    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {

            // get distance and time
            const output = document.querySelector("#output")
            output.innerHTML = "<div class=`alert-info`> From <i class='fa-regular fa-circle-dot' style='color: #000000;'></i>: " + from.value + ".<br /> To <i class='fa-solid fa-location-dot' style='color: #000000;'></i>: " + to.value + ". <br />Driving distance <i class='fa-solid fa-road' style='color: #000000;'></i>: " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fa-solid fa-hourglass-half' style='color: #000000;'></i>: " + result.routes[0].legs[0].duration.text + ". </div>"

            // display route
            directionsDisplay.setDirections(result)

        } else {
            // delete route from map
            directionsDisplay.setDirections({ routes: []})

            // center map in manila
            map.setCenter(mylatlng)

            // show error message
            output.innerHTML = "<div class=`alert-danger><i class=`fa-solid fa-triangle-exclamation` style=`color: #000000;`></i> Could not retrieve driving distance. </div>"

        }

        // // // for fare display & localStorage

        let totalMiles = result.routes[0].legs[0].distance.text
        let x = parseFloat(totalMiles) - 1
        let y = parseFloat(x * 21) + 45

        if ( vehicleOptions.value == "Motorcycle") {
            let finalFarePrice = y + 12
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        } else if ( vehicleOptions.value == "Hatchback") {
            let finalFarePrice = y + 20
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        } else if ( vehicleOptions.value == "Sedan") {
            let finalFarePrice = y + 24
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        } else if ( vehicleOptions.value == "SUV") {
            let finalFarePrice = y + 30
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        } else if ( vehicleOptions.value == "Pickup") {
            let finalFarePrice = y + 30
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        } else if ( vehicleOptions.value == "Mini Van") {
            let finalFarePrice = y + 26
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        } else if ( vehicleOptions.value == "Van") {
            let finalFarePrice = y + 33
            fareDisplay.innerHTML = `<h2>₱${finalFarePrice}</h2>`
        }

        if ( bookingEntries == null){
            bookingEntries = []
        }

        let n = localStorage.getItem("idValue")

        let booking = {
            name: name.value,
            vehicle: vehicleOptions.value,
            origin: from.value,
            destination: to.value,
            fare: fareDisplay.textContent,
            id: ++n
        }

        bookingEntries.push(booking)
        console.log(booking)
            
        localStorage.setItem("bookingEntries", JSON.stringify(bookingEntries))
        localStorage.setItem("idValue", n)
    })

    if ( name.value == "") {

    } else {
        bookBtn.classList.add("show-book-btn")
    }
}

calculateBtn.addEventListener("click", calcRoute)

// popup

let drivers = [
    "Andres Santos", 
    "Emilio Cruz", 
    "Jose Lim", 
    "Juan Gonzales", 
    "Pedro Reyes",
    "Antonio Dela Cruz",
    "Ricardo Fernandez",
    "Marcelo Ocampo",
    "Eduardo Villanueva",
    "Ramon Pascual",
    "Rodrigo Aquino"
]

let licensePlates = [
    "CAX 3200", 
    "UWL 7891", 
    "AUJ 5429", 
    "HSF 9234", 
    "UHA 5232",
    "IJA 9183",
    "DGH 2549",
    "JSD 2420",
    "AKD 7823",
    "TEI 5284",
    "NJF 0375"
]

let randomizerLP = Math.floor(Math.random() * 10) 
let selectedLicensePlate = (licensePlates[randomizerLP])

let randomizerDrivers = Math.floor(Math.random() * 10) 
let selectedDriver = (drivers[randomizerDrivers])

let openPopup = () => {
    popup.classList.add("open-popup")
    bookingContainer.classList.remove("show-booking-container")
    bookBtn.style.visibility = "hidden"
    customerDetails.innerHTML = `<p>Driver: ${selectedDriver}</p>
                                 <p>License Plate: ${selectedLicensePlate}</p>`
}

bookBtn.addEventListener("click", openPopup)

let closePopup = () => {
    popup.classList.remove("open-popup")
    bookBtn.classList.add("show-book-btn")
}

closeBtn.addEventListener("click", closePopup)

// create autocomplete objects for all input

var options = {
    types: ['(cities)']
}

var input1 = from
var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = to
var autocomplete2 = new google.maps.places.Autocomplete(input2, options)

// // // booking end

// // // career start
let applicantDisplay = document.querySelector("#applicantDisplay");


let applicantEntries = JSON.parse(localStorage.getItem("applicantEntries")) || [];


let n = parseInt(localStorage.getItem("idValue")) || 0;

let displayApplicant = () => {
    if (applicantEntries.length === 0) {
        applicantDisplay.innerHTML = `<tr>
                                        <td colspan="3">No Applicant</td>
                                      </tr>`;
    } else {
        let display = "";
        applicantEntries.forEach((item) => {
            display += `<tr id="task${item.id}">
                            <td><input type="text" value="${item.fullName}" readonly></td>
                            <td><input type="number" value="${item.contactNumber}" readonly></td>
                            <td id="action${item.id}"> 
                                <button onclick="deleteTask(${item.id})">Delete</button>
                            </td>
                        </tr>`;
        });

        applicantDisplay.innerHTML = display;
    }
};

displayApplicant();

let addApplicant = (event) => {
    event.preventDefault();

    let applicantItem = {
        fullName: applicantFullName.value,
        contactNumber: applicantContactNumber.value,
        id: ++n,
    };

    applicantEntries.push(applicantItem);

    localStorage.setItem("applicantEntries", JSON.stringify(applicantEntries));
    localStorage.setItem("idValue", n);

    applicantFullName.value = "";
    applicantContactNumber.value = "";
    displayApplicant();
};

let deleteTask = (id) => {
    applicantEntries = applicantEntries.filter((item) => item.id !== id);

    localStorage.setItem("applicantEntries", JSON.stringify(applicantEntries));
    displayApplicant();
};

applyBtn.addEventListener("click", addApplicant);
// // // career end

// });