const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container) {
  this.container = container
}

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:selected-planet-ready", (evt) =>{
    const chosenPlanet = evt.detail;
    this.addPlanetToPage(chosenPlanet)
  })
};

PlanetInfoView.prototype.addPlanetToPage = function(planetObj) {
  this.container.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = planetObj["name"];
  this.container.appendChild(h2);

  const avoidKeys = ["name", "image"];
  const planetDetails = document.createElement("ul");

  for(const key in planetObj) {
    if (!avoidKeys.includes(key)) {
      const planetLi = document.createElement("li")
      planetLi.textContent = `${key}: ${planetObj[key]}`
      planetDetails.appendChild(planetLi)
    }
  }
  this.container.appendChild(planetDetails)
  const planetImage = document.createElement("img")
  planetImage.setAttribute("src", planetObj["image"])
  this.container.appendChild(planetImage)
}

module.exports = PlanetInfoView;
