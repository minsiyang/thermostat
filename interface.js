$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up_temp').on('click', function() {
    thermostat.up();
    updateTemperature();
    })

    $('#down_temp').on('click', function() {
      thermostat.down();
      updateTemperature();
    })

    $('#reset_temp').on('click', function() {
      thermostat.resetTemperature();
      updateTemperature();
    })

    $('#ps_mode_on').on('click', function() {
      thermostat.switchPowerSavingModeOn();
      $('#power_saving_mode').text("ON");
      updateTemperature();
    })

    $('#ps_mode_off').on('click', function() {
      thermostat.switchPowerSavingModeOff();
      $('#power_saving_mode').text("OFF");
      updateTemperature();
    })

    function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if (thermostat.energyUsage() === 'low-usage'){
      $('#temperature').css( 'color', 'green' )
    } else if (thermostat.energyUsage() === 'medium-usage'){
      $('#temperature').css( 'color', 'black' )
    } else {
      $('#temperature').css( 'color', 'red' )
    }
  }
})
