
let units = '';
const USER_Metric = document.querySelector('#metric');
USER_Metric.checked ? units = 'metric' : units = 'imperial';

const USER_NumberOfCars = document.querySelector('#no-of-cars');
const carsContainer = document.querySelector('.car-forms');

const renderCars = function() {
  if (USER_NumberOfCars.value > 0) {
    for (let i = 1; i <= USER_NumberOfCars.value; i++) {
      const car = document.createElement('div');
      car.classList.add('car');
      car.id = ` car-${i}`;
      car.innerHTML = `
      <h3 class="subtitle">Car <span>${i}</span></h3>
  
      <div class="form-group">
        <label for="car-type">Type of car</label>
        <select name="car-type" id="car-type">
          <option value="compact">Compact</option>
          <option value="sedan">Sedan / Saloon</option>
          <option value="wagon">Wagon / Estate</option>
          <option value="suv">SUV / Pickup / Off-Road</option>
          <option value="cabrio">Cabrio / Roadster</option>
          <option value="sportcar">Sportcar / Coupe</option>
          <option value="van">Van / Minivan</option>
          <option value="electric-car">Electric</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="scooter">Scooter</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="fuel-type">Fuel</label>
        <select name="fuel-type" id="fuel-type">
          <option value="gas">Gas</option>
          <option value="diesel">Diesel</option>
          <option value="compressed">Comressed Natural Gas</option>
          <option value="liquid">Liquid Gas</option>
          <option value="electricity">Electricity</option>
          <option value="green">Green Power</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="fuel-economy-known">Fuel economy known?</label>
        <div class="radio-select-wrapper">
          <input type="radio" name="fuel-economy-known" id="fuel-economy-known-yes" checked>
          <label for="fuel-economy-known-yes" class="btn btn-secondary btn-small">Yes</label>
          <input type="radio" name="fuel-economy-known" id="fuel-economy-known-no">
          <label for="fuel-economy-known-no" class="btn btn-secondary btn-small">No</label>
        </div>
      </div>
  
      <div class="form-group">
        <label for="electricity-consumption">Average fuel economy</label>
        <input type="number" name="electricity-consumption" id="electricity-consumption" min="0" max="200" step=".1">
      </div>
  
      <div class="form-group">
        <label for="electricity-consumption">Annual kilometrage</label>
        <input type="number" name="electricity-consumption" id="electricity-consumption" min="0" max="1000000" value="13600">
      </div>
      `
      carsContainer.appendChild(car);
    }
  }
}

USER_NumberOfCars.addEventListener('change', () => {
  // Hide units preferences if number of cars = 0; otherwise show it
  const addOrRemove = USER_NumberOfCars.value == 0 ? "add" : "remove";
  document.querySelector('#js-units').classList[addOrRemove]('is-hidden');

  // Clear the container - important if user changes number of cars
  carsContainer.innerHTML = '';
  
  renderCars();
})
