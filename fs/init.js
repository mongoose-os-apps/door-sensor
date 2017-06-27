// Load Mongoose OS API
load('api_timer.js');
load('api_gpio.js');
load('api_mqtt.js');

//LED Status Lights
let RED_LED = 16;  
let GRN_LED = 17;
let SENSOR = 5; 

GPIO.set_mode(RED_LED, GPIO.MODE_OUTPUT);
GPIO.set_mode(GRN_LED, GPIO.MODE_OUTPUT);

GPIO.set_mode(SENSOR, GPIO.MODE_INPUT); // Pin5 has a fixed pullup resistor

// Store door state so we can detect change
let sensor_state = 0;

// Primary loop run every 1 second looking for a door state change
Timer.set(1000, 1, function() {
  let value = GPIO.read(SENSOR); 

  if (value) { 
    print("Door is OPEN");
    GPIO.write(RED_LED, 0);
    GPIO.write(GRN_LED, 1);
    if ( sensor_state === 0 ) {
      MQTT.pub('sensors/door/office', '{"message": "The door is open.", "default": "", "state": "open"}');
      sensor_state = 1;
    }
  } else {
    print("Door is CLOSED");
    GPIO.write(RED_LED, 1);
    GPIO.write(GRN_LED, 0);
    if ( sensor_state === 1 ) {
      MQTT.pub('sensors/door/office', '{"message": "The door is closed.", "default": "", "state": "closed"}');
      sensor_state = 0;
    }
  }
}, null);
