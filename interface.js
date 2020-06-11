$(document).ready(function() {

    var thermostat = new Thermostat();

    $('#temperature').text(thermostat.temperature);

    $('#up_temp').on('click', function() {
      thermostat.up();
      $('#temperature').text(thermostat.temperature);
    })

    $('#down_temp').on('click', function() {
      thermostat.down();
      $('#temperature').text(thermostat.temperature);
    })

    $('#reset_temp').on('click', function() {
      thermostat.resetTemperature();
      $('#temperature').text(thermostat.temperature);
    })
})