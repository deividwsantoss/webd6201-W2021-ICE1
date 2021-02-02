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
        paragraphOneElement.style = "color: blue; font-weight: bold"


    }
    window.addEventListener("load", Start);


})();