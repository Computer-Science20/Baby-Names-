// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => {babyData = data});

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    displayGender();
  } else if (selection === "rank") {
    displayRank();
  } else if (selection === "starting-letter") {
    displayStartingLetter();
  } else if (selection === "length") {
    displayLength();
  }
}


// Display All Baby Names
function displayAll() {
    let htmlStr = "";
    let count = 0;
    for (let i = 0; i < babyData.length; i++) {
    htmlStr += babyHTMLStr(babyData[i]);
    } {
      count++;
      container.innerHTML = nameCountSpan;
    }
    container.innerHTML = htmlStr;
  console.log("Display All");
  // Confirm data load
  console.log(babyData);
}

// Display Names by Gender
function displayGender() {
    let searchGender = prompt("Please enter the Gender to display: ");
    let nameCountSpan = 0;
    let htmlStr = "";
    let  = 0;
    for (let i = 0; i < babyData.length; i++) {
        if (babyData[i].gender === searchGender) {
          htmlStr += babyHTMLStr(babyData[i]); {
            nameCountSpan++;
          }
        }
    }
    container.innerHTML = htmlStr;
  console.log("Search By Gender");
}

// Display Names within a Range of Ranks
function displayRank() {
    let searchRank = prompt("Please enter the Rank to display: ");

    let htmlStr = "";
    for (let i = 0; i < babyData.length; i++) {
        if (babyData[i].rank === searchRank) {
          htmlStr += babyHTMLStr(babyData[i]);
        }
    }
    container.innerHTML = htmlStr;
  console.log("Search By Rank");
}


// Display Names with Starting Letter
function displayStartingLetter() {
    let searchStartLetter = prompt("Please enter the First Letter of the Name to display: ");

    let htmlStr = "";
    for (let i = 0; i < babyData.length; i++) {
      if (babyData[i].startingletter === searchStartLetter) {
        htmlStr += babyHTMLStr(babyData[i]);
      }
    }
    container.innerHTML = htmlStr;
  console.log("Search by Starting Letter");
}

// Display Names with a Specific Length
function displayLength() {
    let searchNameLength = prompt("Please enter the Length of the Name to display: ");

    let htmlStr = "";
    for (let i = 0; i < babyData.length; i++) {
      if (babyData[i].length === searchNameLength) {
        htmlStr += babyHTMLStr(babyData[i]);
      }
    }
    container.innerHTML = htmlStr;
  console.log("Search by Name Length");
}

// Return html string of given baby 
function babyHTMLStr(baby) {
    return `
      <div>
        <p>
         <strong>${baby.name}</strong> (Rank: ${baby.rank} , Gender: ${baby.gender} )
        </p>
      </div>`;
}