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

    $('#ps_mode_on').on('click', function() {
      thermostat.switchPowerSavingModeOn();
      $('#power_saving_mode').text("ON");
      $('#temperature').text(thermostat.temperature);
    })

    $('#ps_mode_off').on('click', function() {
      thermostat.switchPowerSavingModeOff();
      $('#power_saving_mode').text("OFF");
      $('#temperature').text(thermostat.temperature);
    })

    $('#temperature').text(thermostat.temperature); 
      if (thermostat.energyUsage() === 'low-usage'){
      $('#tempreture').css( 'color', 'green' )
    } else if (thermostat.energyUsage() === 'medium-usage'){
      $('#tempreture').css( 'color', 'black' )
    } else {
      $('#tempreture').css( 'color', 'red' )
    }
 

})