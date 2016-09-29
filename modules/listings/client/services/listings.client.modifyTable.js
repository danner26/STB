'use strict';

function modifyTRow(o) {
  //timeout for a delay to prevent fast double clicking glitches
  setTimeout(function() {
    o.parentElement.parentElement.parentElement.classList.toggle('outline'); //toggle row css class 'outline'
    toggleEye(o); //js function: toggle eye
  }, 50);
}

function toggleEye(o) {
  var eye = o.querySelector('span'); //get span that holds the eye
  if (eye.className === 'glyphicon glyphicon-eye-open') {
    eye.className = 'glyphicon glyphicon-eye-close'; //close eye
  } else {
    eye.className = 'glyphicon glyphicon-eye-open'; //open eye
  }
}

function filterDropdown(o) {
  var arrow = o.querySelector('span'); //get span that holds the arrow
  if (arrow.className === ('glyphicon glyphicon-chevron-down')) {
    arrow.className = 'glyphicon glyphicon-chevron-up'; //arrow up
    checkToggle();
  } else {
    arrow.className = 'glyphicon glyphicon-chevron-down'; //arrow down
    checkToggle();
  }
}

function checkToggle(o) {
  var active = false;
  var state = document.getElementById('state');
  var dist = document.getElementById('distance');
  var age = document.getElementById('ageGroup');
  var level = document.getElementById('levelOfPlay');
  var umps = document.getElementById('umpires');
  var teams = document.getElementById('maxTeams');
  var fees = document.getElementById('addFees');
  var games = document.getElementById('gamesGuar');
  var limit = document.getElementById('timeLimit');
  var play = document.getElementById('typeOfPlay');
  var filters = [state, dist, age, level, umps, teams, fees, games, limit, play];

  for (var i = 0; i < filters.length; i++) {
    if (!active) {
      if (!filters[i].options[filters[i].selectedIndex].defaultSelected) {
        active = true;
      }
    }
  }
  var activeFilter = document.getElementById('activeFilter');
  if (active) {
    activeFilter.style.display = 'inline';
  } else {
    activeFilter.style.display = 'none';
  }
}
