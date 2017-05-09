angular.module('bmc.organizations', [])

.controller('organizations', function($state, $scope) {


  var JSONBand = {
      "name": "Oriental Band",
      "about1": "Shriners are men who enjoy life, fun is a large part of the shrine. Shriners, along with their ladies,   their families and friends have many opportunities to enjoy the fun the Shrine has to offer.   Activities such as parades, dances, circuses, and parties offer something for every member of your family.   Many of these activities help support the Shrine's philanthropy... Shriners Hospitals for Children!",
      "about2": "Our mission is to be the Premiere Fraternal Organization for men of good character committed to   providing attractive, quality programs and services for its members, their families and friends in a   spirited fun, fellowship and social camaraderie. Fostering self improvement through leadership,   education, and the perpetuation of moral values and community and serving mankind through the resources   of its great philanthropy, the Shriners Hospitals for Children.",
      "contacts": [
          {
              "contact": {
                  "role" : "President",
                  "name": "Jeff Harmon",
                  "email": "jeff_harmon@hotmail.com",
                  "phone": "2188391500"
              }
          },
          {
              "contact": {
                  "role" : "Treasurer/Secretary",
                  "name" : "Jeff Van Horn",
                  "email": "jffvanhorn@yahoo.com",
                  "phone": ""
              }
          }
      ]
  }

  var JSONAddzuhman = {
      "name": "Addzuhman Shrine",
      "about1": "Shriners are a spin-off of the Masons.  Founded in 1872, Shiners International continue with   the values and principles that have guided Masons for centuries while adding the elements of fun,   family and philanthropy.  We are a brotherhood of men dedicated to family and relief of children,   while committed to self improvement for the greater good.  We come from a diversion of backgrounds.    This, along with our shared values, desire to have fun, and dedication to help children and families  in need, is the mortar that binds us together and builds lifetime relationships.",
      "about2": "",
      "contacts": [
          {
              "contact": {
                  "role" : "President",
                  "name": "Corey Johnson",
                  "email": "",
                  "phone": ""
              }
          },
          {
              "contact": {
                  "role" : "Vice President",
                  "name": "Larry Lundblad",
                  "email": "",
                  "phone": ""
              }
          },
  	{
              "contact": {
                  "role" : "Secretary",
                  "name": "Ron Burnard",
                  "email": "",
                  "phone": ""
              }
          },
  	{
              "contact": {
                  "role" : "Treasurer",
                  "name": "Greg Grunig",
                  "email": "",
                  "phone": ""
              }
          },
  	{
              "contact": {
                  "role" : "At-Large",
                  "name": "Justin Knippel",
                  "email": "",
                  "phone": ""
              }
          }
      ]
  }
  var JSONAurora = {
      "name": "Aurora Lodge",
      "about1": "Aurora Lodge #100 is part of the over 12000 men who proudly call themselves Masons of Minnesota. We are located at 205 1/2 South Sixth St in downtown Brainerd.  We meet on the 2nd and 4th Tuesday of each month, serving dinner at 6 PM and meeting starting at 7 PM.",
      "about2": "Freemasonry is the oldest and largest fraternity in existence today with it roots going back centuries.   In ancient times, stonemasons and other craftsman bonded together for the purpose of gaining better wages,   thus providing a better lifestyle for their families.  These organizations were called guilds and they met   in shelter homes they called lodges.  The square and compass became the symbol of their trades and brotherhood.   Over time, Freemasonry evolved into what it  is today.  We are a brotherhood of men that is built on the   foundation of self improvement, respect for others, caring for the less fortunate,and helping those in need.    Through these actions we develop honesty, integrity, kindness, and fairness and hope to better ourselves and   our communities.",
      "contacts": [
          {
              "contact": {
                  "role" : "Master",
                  "name": "Justin Knippel",
                  "email": "justknipp@hotmail.com",
                  "phone": "2183305591"
              }
          },
          {
              "contact": {
                  "role" : "Senior Warden",
                  "name": "Corey Johnson",
                  "email": "lakesareapizza@brainerd.net",
                  "phone": "2188204728"
              }
          },
  	{
              "contact": {
                  "role" : "Junior Warden",
                  "name": "Jim Chandler",
                  "email": "geojim1@brainerd.net",
                  "phone": "3202603116"
              }
          },
  	{
              "contact": {
                  "role" : "Secretary",
                  "name": "Stephen Johnson",
                  "email": "steve@lifttechmarine.com",
                  "phone": "2188312326"
              }
          },
  	{
              "contact": {
                  "role" : "Area Deputy",
                  "name": "Kenneth Friese",
                  "email": "",
                  "phone": ""
              }
          },
  	{
              "contact": {
                  "role" : "District Representative",
                  "name": "Ron Purnard",
                  "email": "",
                  "phone": ""
              }
          }
      ]
  }
  var JSONOES = {
      "name": "Order of the Eastern Star",
      "about1": "The Order of the Eastern Star is a fraternal organization that both men and women can join.   It was established in 1850 by Rob Morris, a lawyer and educator from Boston, Massachusetts,  who had been an official with the Freemasons. It is based on teachings from the Bible,   but is open to all people  who have a belief in a God.",
      "about2": "Alpha Chapter #23 was Constituted:  May 7, 1888 in Brainerd, Minnesota,  which makes this   Chapter over 125 years old.",
      "contacts": [
          {
              "contact": {
                  "role" : "Marshall",
                  "name": "Judy Whiteman",
                  "email": "",
                  "phone": "2188296367"
              }
          },
          {
              "contact": {
                  "role" : "Secretary",
                  "name": "Gayle Anderson",
                  "email": "",
                  "phone": "2188298656"
              }
          }
      ]
  }
  var JSONLadies = {
      "name": "Ladies Auxiliary",
      "about1": "Since 1923, WGA4KIDS - Shriners Hospitals for Children Twin Cities has worked to provide a loving and supportive  environment for children and their families while they receive treatment at the hospital. Our staff,   comprised completely of volunteers, provides wheelchairs, clothing, toiletries, comfort items and toys  for patients.",
      "about2": "One of 22 Shriners Hospitals across the country, the Shriners Hospitals for Children Twin Cities   provides state of the art orthopedic care to more than 5,000 children annually regardless of the   family's financial situation or ability to pay for services. The hospital and WGA4KIDS both operate   from the compassionate generosity of donors.",
      "contacts": [
          {
              "contact": {
                  "role" : "President",
                  "name": "Heather Johnson",
                  "email": "heatherjohnsonlap@hotmail.com",
                  "phone": "2182322593"
              }
          },
          {
              "contact": {
                  "role" : "Vice President",
                  "name": "Cyndi Burnard",
                  "email": "",
                  "phone": "2182324946"
              }
          },
          {
              "contact": {
                  "role" : "Treasurer",
                  "name": "Lynn Doxbury",
                  "email": "ldoxbury@centurytel.net",
                  "phone": "3204682819"
              }
          },
          {
              "contact": {
                  "role" : "Secretary",
                  "name": "Genelle Harmon",
                  "email": "genelle.harmon@ascensus.com",
                  "phone": "2188395225"
              }
          }
      ]
  }
  console.log(JSONLadies);
  $scope.goToOrg = function(org) {
    switch(org){
      case 1: window.localStorage.setItem("currentSubOrganization",  JSON.stringify(JSONAurora));
      break;
      case 2: window.localStorage.setItem('currentSubOrganization', JSON.stringify(JSONOES ));
      break;
      case 3: window.localStorage.setItem('currentSubOrganization', JSON.stringify(JSONAddzuhman ));
      break;
      case 4: window.localStorage.setItem('currentSubOrganization',JSON.stringify( JSONBand ));
      break;
      case 5:window.localStorage.setItem('currentSubOrganization', JSON.stringify(JSONLadies) );
      break;
    }
    $state.go('app.sub_organization');
  }
})

.controller('sub_organizations', function($scope) {
  var org = JSON.parse((window.localStorage.getItem('currentSubOrganization')));
$scope.org = org
});
