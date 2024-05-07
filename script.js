/*js for button animations*/
function growing1() {
  document.getElementById("ring1").style.scale = "350%";
}
function shrinking1() {
  document.getElementById("ring1").style.scale = "100%";
}

function growing2() {
  document.getElementById("ring2").style.scale = "350%";
}
function shrinking2() {
  document.getElementById("ring2").style.scale = "100%";
}

function growing3() {
  document.getElementById("ring3").style.scale = "350%";
}
function shrinking3() {
  document.getElementById("ring3").style.scale = "100%";
}

function growing4() {
  document.getElementById("ring4").style.scale = "350%";
}
function shrinking4() {
  document.getElementById("ring4").style.scale = "100%";
}

function growing5() {
  document.getElementById("ring5").style.scale = "350%";
}
function shrinking5() {
  document.getElementById("ring5").style.scale = "100%";
}

function growing6() {
  document.getElementById("ring6").style.scale = "350%";
}
function shrinking6() {
  document.getElementById("ring6").style.scale = "100%";
}

let middle1 = 2;
let middle2 = 2;
let middle3 = 2;
let middle4 = 2;
let middle5 = 2;
let middle6 = 2;

function shimmy1() {
  if (middle1 % 2 == 0) {
    document.getElementById("button1").style.marginLeft = "10%";
    middle1 = middle1 + 1;
  } else {
    document.getElementById("button1").style.marginLeft = "40%";
    middle1 = middle1 + 1;
  }
}

function shimmy2() {
  if (middle2 % 2 == 0) {
    document.getElementById("button2").style.marginLeft = "10%";
    middle2 = middle2 + 1;
  } else {
    document.getElementById("button2").style.marginLeft = "40%";

    middle2 = middle2 + 1;
  }
}

function shimmy3() {
  if (middle3 % 2 == 0) {
    document.getElementById("button3").style.marginLeft = "10%";
    middle3 = middle3 + 1;
  } else {
    document.getElementById("button3").style.marginLeft = "40%";
    middle3 = middle3 + 1;
  }
}

function shimmy4() {
  if (middle4 % 2 == 0) {
    document.getElementById("button4").style.marginLeft = "10%";
    middle4 = middle4 + 1;
  } else {
    document.getElementById("button4").style.marginLeft = "40%";
    middle4 = middle4 + 1;
  }
}

function shimmy5() {
  if (middle5 % 2 == 0) {
    document.getElementById("button5").style.marginLeft = "10%";
    middle5 = middle5 + 1;
  } else {
    document.getElementById("button5").style.marginLeft = "40%";
    middle5 = middle5 + 1;
  }
}

function shimmy6() {
  if (middle6 % 2 == 0) {
    document.getElementById("button6").style.marginLeft = "10%";
    middle6 = middle6 + 1;
  } else {
    document.getElementById("button6").style.marginLeft = "40%";
    middle6 = middle6 + 1;
  }
}

/* content box 1 transition */
document.addEventListener("DOMContentLoaded", function () {
  var box1 = document.getElementById("segment1"),
    button1 = document.getElementById("button1");

  button1.addEventListener(
    "click",
    function (e) {
      if (box1.classList.contains("segAct")) {
        // hide
        box1.classList.remove("segAct");
        box1.classList.add("segTransout");
        box1.classList.add("segHide");
      } else {
        // show
        box1.classList.add("segVis");
        box1.clientWidth;
        box1.classList.add("segTransin");
        box1.classList.add("segAct");
      }
    },
    false
  );

  box1.addEventListener(
    "transitionend",
    function () {
      box1.classList.remove("segTransout");
      box1.classList.remove("segTransin");
      box1.classList.remove("segVis");
      box1.classList.remove("segHide");
    },
    false
  );
});

/* content box 2 transition */

document.addEventListener("DOMContentLoaded", function () {
  var box2 = document.getElementById("segment2"),
    button2 = document.getElementById("button2");

  button2.addEventListener(
    "click",
    function (e) {
      if (box2.classList.contains("segAct")) {
        // hide
        box2.classList.remove("segAct");
        box2.classList.add("segTransout");
        box2.classList.add("segHide");
      } else {
        // show
        box2.classList.add("segVis");
        box2.clientWidth;
        box2.classList.add("segTransin");
        box2.classList.add("segAct");
      }
    },
    false
  );

  box2.addEventListener(
    "transitionend",
    function () {
      box2.classList.remove("segTransout");
      box2.classList.remove("segTransin");
      box2.classList.remove("segVis");
      box2.classList.remove("segHide");
    },
    false
  );
});

/* content box 3 transition */

document.addEventListener("DOMContentLoaded", function () {
  var box3 = document.getElementById("segment3"),
    button3 = document.getElementById("button3");

  button3.addEventListener(
    "click",
    function (e) {
      if (box3.classList.contains("segAct")) {
        // hide
        box3.classList.remove("segAct");
        box3.classList.add("segTransout");
        box3.classList.add("segHide");
      } else {
        // show
        box3.classList.add("segVis");
        box3.clientWidth;
        box3.classList.add("segTransin");
        box3.classList.add("segAct");
      }
    },
    false
  );

  box3.addEventListener(
    "transitionend",
    function () {
      box3.classList.remove("segTransout");
      box3.classList.remove("segTransin");
      box3.classList.remove("segVis");
      box3.classList.remove("segHide");
    },
    false
  );
});

/* content box 4 transition */
document.addEventListener("DOMContentLoaded", function () {
  var box4 = document.getElementById("segment4"),
    button4 = document.getElementById("button4");

  button4.addEventListener(
    "click",
    function (e) {
      if (box4.classList.contains("segAct")) {
        // hide
        box4.classList.remove("segAct");
        box4.classList.add("segTransout");
        box4.classList.add("segHide");
      } else {
        // show
        box4.classList.add("segVis");
        box4.clientWidth;
        box4.classList.add("segTransin");
        box4.classList.add("segAct");
      }
    },
    false
  );

  box4.addEventListener(
    "transitionend",
    function () {
      box4.classList.remove("segTransout");
      box4.classList.remove("segTransin");
      box4.classList.remove("segVis");
      box4.classList.remove("segHide");
    },
    false
  );
});

/* content box 5 transition */
document.addEventListener("DOMContentLoaded", function () {
  var box5 = document.getElementById("segment5"),
    button5 = document.getElementById("button5");

  button5.addEventListener(
    "click",
    function (e) {
      if (box5.classList.contains("segAct")) {
        // hide
        box5.classList.remove("segAct");
        box5.classList.add("segTransout");
        box5.classList.add("segHide");
      } else {
        // show
        box5.classList.add("segVis");
        box5.clientWidth;
        box5.classList.add("segTransin");
        box5.classList.add("segAct");
      }
    },
    false
  );

  box5.addEventListener(
    "transitionend",
    function () {
      box5.classList.remove("segTransout");
      box5.classList.remove("segTransin");
      box5.classList.remove("segVis");
      box5.classList.remove("segHide");
    },
    false
  );
});

/* content box 6 transition */
document.addEventListener("DOMContentLoaded", function () {
  var box6 = document.getElementById("segment6"),
    button6 = document.getElementById("button6");

  button6.addEventListener(
    "click",
    function (e) {
      if (box6.classList.contains("segAct")) {
        // hide
        box6.classList.remove("segAct");
        box6.classList.add("segTransout");
        box6.classList.add("segHide");
      } else {
        // show
        box6.classList.add("segVis");
        box6.clientWidth;
        box6.classList.add("segTransin");
        box6.classList.add("segAct");
      }
    },
    false
  );

  box6.addEventListener(
    "transitionend",
    function () {
      box6.classList.remove("segTransout");
      box6.classList.remove("segTransin");
      box6.classList.remove("segVis");
      box6.classList.remove("segHide");
    },
    false
  );
});
