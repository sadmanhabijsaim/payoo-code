console.log("Login Functionality Script Loaded");

document.getElementById("login-btn").addEventListener("click", function(){
    const inputNumber = document.getElementById("input-number");
    const contactNumber = inputNumber.value;
    console.log(contactNumber);

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    if(contactNumber === "01700000000" && pin === "1234"){
        alert("Login Successful");
        window.location.href = "./home.html";
    }else{
        alert("Login Failed");
        return;
    }
})