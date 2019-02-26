const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("PlanetView:select", (evt) => {
    const planetId = evt.detail;
    const result = this.findPlanet(planetId);
    PubSub.publish("SolarSystem:selected-planet-ready", result);
  });
};

SolarSystem.prototype.findPlanet = function (id) {
  let planetWeWant;
  this.planets.forEach((planet) => {
    if (planet['name'] === id) {
      planetWeWant = planet;
    }
  });
  return planetWeWant;
};

module.exports = SolarSystem;
