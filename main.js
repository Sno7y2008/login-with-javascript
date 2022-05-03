let register = document.getElementById("Register")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let btn_1 = document.getElementById("btn_1")





btn_1.addEventListener("click", () => {
    if (username.value === "" || email.value === "" || password.value === "") {
        let req = document.querySelector(".req").style.display = "block";
        let next = document.querySelector("#Next").style.display = "none";
    } 
    setTimeout(function () {
        if (username.value === "" || email.value === "" || password.value === "") {
            let req = document.querySelector(".req").style.display = "none";
         }
    }, 1350)
    
    window.sessionStorage.setItem("name", username.value)
    window.sessionStorage.setItem("password", password.value)
    let next = document.querySelector("#Next").style.display = "block";
    Next.addEventListener("click", () => {
        register.style.visibility = "hidden";
        let login = document.getElementById("login").style.visibility = "visible";
        let back = document.getElementById("Back")
        back.onclick = () => {
            let login = document.getElementById("login").style.visibility = "hidden";
            register.style.visibility = "visible";
        };

        let username2 = document.getElementById("username_1")
        let password2 = document.getElementById("password_1")
        let btn_2 = document.getElementById("btn_2")

        btn_2.onclick = (e) => {
            if (username2.value !== window.sessionStorage.getItem("name") || password2.value !== window.sessionStorage.getItem("password")) {
                e.preventDefault();
                document.querySelector(".reqe").style.display = "block";
                setTimeout(() => {
                    document.querySelector(".reqe").style.display = "none";
                }, 1350);
           } 
        };
    });
});

