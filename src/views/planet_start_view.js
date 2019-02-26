const PubSub = require('../helpers/pub_sub.js');


const PlanetView = function () {

}

PlanetView.prototype.bindEvents = function (event) {
  const planetsNav = document.querySelector("nav")
  planetsNav.addEventListener('click', (event) => {
    const planetId = event.target.id;
    PubSub.publish("PlanetView:select", planetId);
    this.updateNav(planetId)
  });
};

PlanetView.prototype.updateNav = function (planetId) {
  const planet = document.querySelector(`#${planetId}`)
  const removeSelected = document.querySelector(".updateNav")
  if (removeSelected) {
    removeSelected.classList.remove("updateNav")
  }
  planet.classList.add("updateNav")
}

module.exports = PlanetView;
