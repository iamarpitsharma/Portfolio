const Role = document.querySelector(".role");


document.addEventListener("DOMContentLoaded", () => {
    var typeData = new Typed(Role, {
        strings: [
            "Full Stack Developer",
            "React.js Enthusiast",
            // "Web Developer",
            "Frontend Developer",
            "Freelancer",
            "Coder",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
    });
})

// const formSubmit = document.querySelector("#submit-btn");
// formSubmit.addEventListener('click', () => {
//     alert("Mail Send");
// })
//dark theme
// const theme = document.querySelector(".mode");

// theme.addEventListener("click", () => {
//     // theme.toggle("dark")
//     console.log("cliked");
//     document.body.classList.toggle("dark");

//     if (document.body.classList.contains("dark")) {
//         theme.textContent = '<i class="fa-solid fa-sun "></i>Light'
//     } else {
//         theme.textContent ='<i class="fa-solid fa-moon "></i>Dark'
//     }
// })

// const theme = document.querySelector(".mode");

// theme.addEventListener("click", () => {
//     // theme.toggle("dark")
//     console.log("cliked");
//     document.body.classList.toggle("dark");

//     if (document.body.classList.contains("dark")) {
//         theme.textContent = '<i class="fa-solid fa-sun "></i>Light'
//     } else {
//         theme.textContent ='<i class="fa-solid fa-moon "></i>Dark'
//     }
// })

// const addIt = document.getElementsByClassName("hero-section-headding")[0];
// const added = document.querySelector(".hero-section-headding")
// console.log(addIt);
// console.log(added);

// const body = document.body;
// let ele = document.createElement("h1");
// ele.textContent = "hello";

// addIt.appendChild(ele);

// let newElement = document.createElement("h2");
// newElement.textContent="hello World";
// addIt.appendChild(newElement);


// const newbtn = document.querySelector(".btn-hire_me");
// const newAbove = document.createElement("h1");
// newAbove.textContent = "how Are you";
// // newbtn.appendChild(newAbove);

// newbtn.insertAdjacentElement("beforebegin", newAbove)

// // newAbove.style.color = 'pink';
// // newAbove.style.cssText = "color:pink; background:red;"
// // newAbove.setAttribute("style", "color:pink");
// newAbove.className()

// const light = document.querySelector(".light-theme");
// const body = document.querySelector("body");
// // console.log(body);
// // console.log(light);
// // console.log(light.classList.contains("light-theme"))
// light.addEventListener("click", () => {
//     if (light.classList.contains("light-theme")) {
//         // light.classList.remove("light-theme");
//         // light.classList.add("dark")

//         light.innerHTML = `<i class="fa-solid fa-sun"></i> Light`;
//         light.classList.toggle("light-theme");
//         light.classList.toggle("dark");
//         // body



//     } else {
//         light.classList.toggle("light-theme");
//         light.classList.toggle("dark");

//         // light.classList.remove("dark");
//         light.innerHTML = `<i class="fa-solid fa-moon "></i> Dark`;
//         // light.classList.add("light-theme");

//         // body



//     }
// })

const light = document.querySelector(".light-theme");

light.addEventListener("click", () => {
    
    const islight = light.classList.contains("light-theme");
    
    if (islight) {
        light.innerHTML = `<i class="fa-solid fa-sun"></i> Light`;
    } else {
        light.innerHTML = `<i class="fa-solid fa-moon"></i> Dark`;
    }
    
    document.body.classList.toggle("dark");
    light.classList.toggle("light-theme");
    light.classList.toggle("dark");
})






