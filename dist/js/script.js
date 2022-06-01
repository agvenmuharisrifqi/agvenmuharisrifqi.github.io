// User Language
const userLang = navigator.language || navigator.userLanguage;
document.querySelector("html").setAttribute("lang", userLang.substr(0, 2));

// Animation Title
const effectTitle = () => {
    const allTitle = [...document.getElementsByClassName("general-title")];
    allTitle.forEach(elem => {
        let elemPosition = elem.getBoundingClientRect().top;
        let sizeWindow = window.innerHeight;
        if (elemPosition < sizeWindow) {
            elem.classList.add("active")
        } else {
            elem.classList.remove("active")
        }
    })
}

// Send Mail
(function () {
    emailjs.init("zwjrAOYDqvPzguXSz");
})();

const successInfo = "Pesan berhasil dikirim, saya akan segera membalas email anda.";
const errorInfo = "Pesan tidak berhasil dikirim, silahkan coba lagi.";
const elemAlert = document.getElementById("alert-email");
const serviceID = "service_ps2xz6m";
const templateID = "template_hh1u4j7";
const email = {
    message: document.getElementById("user-subject").value, // Message Email
    from: document.getElementById("user-name").value, // From Name
    from_email: document.getElementById("user-email").value // Email Dari Siapa
}

const submit = document.getElementById("submit-form");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let check = checkInput();
    if (!check.includes(false)) {
        emailjs.send(serviceID, templateID, email)
            .then(function (success) {
                elemAlert.innerHTML = successInfo;
                elemAlert.classList.add("bg-green-300");
            }, function (error) {
                elemAlert.innerHTML = errorInfo;
                elemAlert.classList.add("bg-red-300");
            })
        elemAlert.classList.remove("hidden");
    }
})
if (elemAlert.innerHTML) {
    setInterval(() => {
        elemAlert.classList.add("hidden")
    }, 5000);
}

const checkInput = () => {
    let status = []
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        inputAll = [...document.querySelectorAll("input")],
        inputAlert = document.querySelectorAll("[error-input]");
    inputAll.forEach((elem, index) => {
        let value = elem.value;
        if (value == "") {
            inputAlert[index].classList.remove("hidden");
            inputAlert[index].innerHTML = inputAlert[index].getAttribute("data-null");
            status.push(false);
        } else if (elem.type === "email" && !value.match(reg)) {
            inputAlert[index].classList.remove("hidden");
            inputAlert[index].innerHTML = inputAlert[index].getAttribute("data-error");
            status.push(false);
        } else {
            inputAlert[index].classList.add("hidden");
            inputAlert[index].innerHTML = "";
            status.push(true);
        }
    })
    return status;
}

// Navigation
const allNav = [...document.querySelectorAll(".nav-item a")];
allNav.forEach(elem => {
    elem.addEventListener("click", (e) => {
        allNav.forEach(nav => {
            nav.classList.remove("active");
        })
        elem.classList.add("active");
    })
});

// Toggle Navigation
const toggleNav = document.getElementById("nav_toggle"); //Get element toggle nav
const navBrand = document.querySelector(".nav-brand"); //Get element navbar brand
const toggle = [...document.querySelectorAll(".nav-toggle span")]; //Get component toggle nav mobile
const navLink = [...document.querySelectorAll(".nav-item a")]; //Get element navbar link
toggleNav.addEventListener("click", (e) => {
    if (toggleNav.classList.contains("active")) {
        toggleNav.classList.remove("active"); //Remove active class
        navBrand.className = navBrand.className.replace(/white/, "dark"); //Change text white to dark
    } else {
        toggleNav.classList.add("active"); //Add active class
        navBrand.className = navBrand.className.replace(/dark/, "white"); //Change text dark to white
    }
    toggle.forEach(elem => {
        if (elem.classList.contains("active")) {
            elem.classList.remove("active"); //Remove active class
            elem.classList.add("nonactive"); //Add nonactive class
        } else {
            elem.classList.remove("nonactive"); //Remove nonactive class
            elem.classList.add("active"); //Add active class
        }
    });
    navLink.forEach(link => {
        link.addEventListener("click", () => {
            toggleNav.classList.remove("active");
            navBrand.className = navBrand.className.replace(/white/, "dark");
            toggle.forEach(tg => {
                tg.classList.remove("active"); //Remove active class
                tg.classList.add("nonactive"); //Add nonactive class
            });
        })
    })
});

// Nav On Scroll
const navbar = document.getElementById("navbar"); //Get navbar container
const navScroll = () => {
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.style.boxShadow = '0px 1px 5px rgb(0,0,0,.3)';
        navbar.style.backgroundColor = '#FFFFFF';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'transparent';
    }
}

const allSection = [...document.querySelectorAll("[data-section]")];
const activeNavOnScroll = () => {
    allSection.forEach((section, index) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.getBoundingClientRect().height;
        if (top >= offset && top < offset + height) {
            navLink.forEach(nav => nav.classList.remove("active"))
            navLink[index].classList.add("active");
        }
    })
}

window.onresize = () => {
    if (window.innerWidth > 768) {
        toggleNav.classList.remove("active");
        navBrand.className = navBrand.className.replace(/white/, "dark");
    }
}

//Call function when window on scroll
window.onscroll = () => {
    effectTitle();
    navScroll();
    activeNavOnScroll();
}