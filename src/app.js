const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetView = require('./views/planet_start_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  console.log(planetsDataModel.planets);

  const planetView = new PlanetView();
  planetView.bindEvents();

  const planetDetails = document.querySelector('.planet-details');
  const planetInfo = new PlanetInfoView(planetDetails);
  planetInfo.bindEvents();
});
