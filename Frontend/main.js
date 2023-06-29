
let login = document.getElementById("submitlogin")

let email = document.getElementById("email")
let password = document.getElementById("password")


login.addEventListener("click", (e) => {
    e.preventDefault()
    if(email.value === "" || password.value === ""){
        return swal("","Please fill all the fields" , "error");
    }

    let payload = {
        email: email.value,
        password: password.value
    }
    console.log(payload)
    fetch("https://hts-backend-01.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
    .then((data) => {
        console.log(data)
        if(data.msg === "User Successfully login"){
            swal("Greetings 🤝","User Successfully login" , "success");
            email.value = ""
            password.value = ""
        }else{
            swal('', data.msg, "error");
        }
    })
    .catch((err) =>  swal(``, err.message, "error"))
})


let register = document.getElementById("submitsignup")

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let emailignup = document.getElementById("emailsignup")
let passwordsignup = document.getElementById("passwordsignup")

register.addEventListener("click", (e) => {
    e.preventDefault()
    if(fname.value === "" || lname.value === "" || emailignup.value === "" || passwordsignup.value === ""){
        return swal("","Please fill all the fields" , "error");
    }

    let payload = {
        fname: fname.value,
        lname: lname.value,
        email: emailignup.value,
        password: passwordsignup.value
    }
    console.log(payload)
    fetch("https://hts-backend-01.onrender.com/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
    .then((data) => {
        console.log(data)
        if(data.msg === "User Registered"){
            swal("Greetings 🤝","User Registered Successfully" , "success");
            fname.value = ""
            lname.value = ""
            emailignup.value = ""
            passwordsignup.value = ""
        }else{
            swal('', data.msg, "error");
        }
    })
    .catch((err) =>  swal(``, err.message, "error"))
})