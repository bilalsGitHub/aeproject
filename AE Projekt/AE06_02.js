/*<!--
Namen: Bilal Hinislioglu;
Matrikelnummer: 677945;
--> */
function main() {
  let epc = new ClassEPC();
  for (var i = 1; i < 6; i++) {
    for (var j = 1; j < 6; j++) {
      epc.addEreignis("er1", i, j, ``); //${i}
    }
  }
  epc.show();

  var allsquares = document.querySelectorAll("#small");
  const startbutton = document.querySelector("#startbutton");
  const timer = document.querySelector("#timer");
  const goal = document.querySelector("#goal");
  const scoreboard = document.querySelector("#score");
  const resetbutton = document.querySelector("#resetbutton");
  var score = 0;
  var interval;
  console.log(allsquares);
  console.log("************");
  allsquares.forEach(function (item) {
    console.log("item" + item.getAttribute("id"));
  });
  console.log("mit for schleife für mich");
  for (let i in allsquares) {
    console.log(allsquares[i]);
  }

  var second = 60;
  //It starts the Interval

  function intervelStart() {
    interval = setInterval(() => {
      second--;
      if (second <= 0) {
        clearInterval(interval);
        interval = null;
        checkTheNoneclickedBoxes();
      }
      updateTheScore();
      checkTheNoneclickedBoxes();
    }, 1000);
  }
  startbutton.addEventListener("click", function () {
    goal.innerText = "Let's Go Timer is running";
    startbutton.classList.add("display-none"); //to make invisible
    intervelStart();
  });

  allsquares.forEach(function (each) {
    each.addEventListener("click", function (e) {
      if (interval) {
        var check = checkIt(each.style.fill);
        //If the color matches
        if (check) {
          score++;
          each.style.fill = "black";
          updateTheScore(score);
          each.removeAttribute("id");
          allsquares = document.querySelectorAll("#small");
          console.log("**");
          console.log(allsquares.length);
          changeallcolors();
          checkTheNoneclickedBoxes();
        } else {
          changeallcolors();
        }
      }
    });
  });

  console.log("***");
  console.log(allsquares);

  //If the color matches, it will change the color of all unclicked boxes.
  function changeallcolors() {
    allsquares.forEach(function (each) {
      each.style.fill = getTheColor();
    });
  }
  //Get a random color
  function getTheColor() {
    var randomColor = Math.floor(Math.random() * 4 + 1); //Creating a random number between 1 to 4
    if (randomColor == 1) {
      return "red";
    }
    if (randomColor == 2) {
      return "yellow";
    }
    if (randomColor == 3) {
      return "green";
    }
    if (randomColor == 4) {
      return "blue";
    }
  }

  //checking the color of the button we clicked
  function checkIt(inputcolor) {
    if (timer.style.color == inputcolor) {
      return true;
    }
  }

  function updateTheScore() {
    timer.innerText = second;
    timer.style.color = getTheColor();
    scoreboard.innerText = "Score:" + score;
  }

  //checking for more clickable Boxes
  function checkTheNoneclickedBoxes() {
    if (allsquares.length == 0) {
      setTimeout(() => {
        clearInterval(interval);
        updateTheScore();
        scoreboard.innerText = "Well Done Your Score:" + score;
      }, 600);
    }
    if (interval == null && allsquares.length != 0) {
      scoreboard.innerText =
        "You need to be faster next time :( Score:  " + score;
    }
  }
  resetbutton.addEventListener("click", function () {
    startbutton.classList.remove("display-none");
    clearInterval(interval);
    // score = 0
    // updateTheScore()
    // second = 60
    // timer.innerText = second;
    location.reload(); //to Refresh the page
  });
}
