#include <Servo.h>

Servo tap_servo;

int sensor_pin = 4;
int tap_servo_pin =5;
int val;

void setup() {
  pinMode(sensor_pin,INPUT);
  tap_servo.attach(tap_servo_pin);

  

}

void loop() {
  val = digitalRead(sensor_pin);

  if (val==0){
    delay(3000);
    tap_servo.write(90);
    
  }

  if (val==1){
  tap_servo.write(135);
  delay(1000);
  tap_servo.write(90);
  }
 
}
