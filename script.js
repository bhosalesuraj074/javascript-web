console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi =document.getElementsByClassName("liItem");
console.log(elementLi[1].innerHTML);
console.log("====== API querySelector() to select element by id  =====");
const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
const elementByQuery= document.querySelector(".liItem");
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
const elementsByQuery = document.querySelectorAll(".liItem");
console.log(elementsByQuery);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

console.log("====== Changing the CSS properties =====");
const elementTechStack = document.querySelector("#techStack");
//elementTechStack.style.color = "red";
//elementTechStack.style.fontFamily = "Courier New', Courier, monospace";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

// function show()
// {
//     console.log("click Event ");
// }

const clickEvent=document.querySelector("#address");
//clickEvent.addEventListener("click",()=>

//clickEvent.addEventListener("dblclick",()=>
clickEvent.addEventListener("mouseover",()=>
{
    console.log("Click Event ...");
});

const num = document.querySelector("#isEven")
num.addEventListener("click",()=>
{
    const a=prompt("Enter the number");
    if(a % 2=== 0)
    {
        alert("Number is even");
    }
    else{
        alert("Number is odd");
    }
})


// document.addEventListener('mouseup', () => {
//     // get the selected text
//     const selectedText = window.getSelection().toString().trim();
    
//     // if there is selected text, print it to the console
//     if (selectedText.length > 0) {
//       console.log(`Selected text: "${selectedText}"`);
//     }
//   });


