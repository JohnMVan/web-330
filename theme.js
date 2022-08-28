/*
============================================
; Title:  theme.js
; Author: John Vanhessche
; Date:   8/13/2022
; Description: theme.js common for all solutions
;===========================================
*/

//This function applies default settings when the page loads for mode, iconMode and iconText.
//this is run on page load in index.html.

function setDefaultTheme() {

    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;

}

//This sets the HTML body to the selected theme, or uses light-theme if none selected.

function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}