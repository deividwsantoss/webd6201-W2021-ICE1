/* Custom JavaScript goes here */


// IIFE - 
//AKA - Anonymous self-excuting function

"use strict";

(function()
{


    function Start()
    {
        console.log("App Started...")

        let paragraphOneText = "This is a simple site to demonstrate DOM manipulation for ICE 1";
        let paragraphOneElement = document.getElementById("paragraphOne");

        //let paragraphOneParagraph = document.getElementsByTagName("p")[0];
        //let paragraphOneQuery = document.querySelector("p");
        //let paragraphOneQuerys = document.querySelectorAll("p")[0];

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5 text-center";

        //Step 1. document.createElement
        let newParagraph = document.createElement("p");
        //configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "... And this is Paragraph Two";
        //step 3. Select the parent element 
        let mainContent = document.getElementsByTagName("main")[0];
        //step 4. Add / Insert the element 
        mainContent.appendChild(newParagraph);




    }
    window.addEventListener("load", Start);


})();