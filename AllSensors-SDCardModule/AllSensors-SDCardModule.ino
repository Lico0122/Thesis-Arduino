#include <Servo.h>
#include <SPI.h>
#include <SD.h>

File data;
const int chipSelect = 4;

Servo plastic_servo, moisture_servo, metal_servo;
int plastic_servo_pin = 9;
int moisture_servo_pin = 8;
int metal_servo_pin = 7;
int val;

int sensor_pin = 5;
int metal_pin = 3;

int msensor = A2; // moisture sensor is connected with the analog pin A1 of the Arduino
int msvalue = 0; // moisture sensor value  
boolean flag = false; 


void setup() {
 
  Serial.begin(9600);
  Serial.println("SD Card Initialization...");
  if (!SD.begin(chipSelect)){
    Serial.println("Initialization Failed!");
    return;
  }
  Serial.println ("Initialization Successful");
  Serial.println ("Creating File.....");
  data = SD.open("datalog.txt", FILE_WRITE);
  if (data) {
    data.println("open");
    data.close();
    // print to the serial port too:
    Serial.println("opened");
  }
  // if the file isn't open, pop up an error:
  else {
    Serial.println("error opening datalog.txt");
  }
  Serial.println("File Created!");
  delay(1000);

  pinMode(sensor_pin,INPUT);
  pinMode(metal_pin,INPUT);
  pinMode(msensor, INPUT);
  plastic_servo.attach(plastic_servo_pin);
  moisture_servo.attach(moisture_servo_pin);
  metal_servo.attach(metal_servo_pin);

  
  

}

void loop() {
  plastic();
  moisture();
  metal();
  delay(100);
}

void plastic(){

  if (digitalRead(sensor_pin) == HIGH){
    plastic_servo.write(90);
    Serial.print("ir");
  } else {
    Serial.println("Plastic Detected!");
    delay(10000);
    Serial.println("Opening Servo Motor!");
    plastic_servo.write(135);
    delay(4000);
    Serial.println("Closing!");
    plastic_servo.write(90);
    Serial.println("File Can Be Written.");
    data = SD.open("datalog.txt", FILE_WRITE);
    data.println("Plastic Waste");
    data.close();
  }
}
void moisture(){
  msvalue = analogRead(msensor);
  Serial.println(msvalue);
  
  if ( (msvalue >= 501  ) && ( flag == true ) ){
    flag = false; 
    moisture_servo.write(90);
    Serial.println("None");
  }
  if ( (msvalue <= 500  ) && ( flag == false ) ){
    Serial.println("Wet Waste Detected!");
    delay(10000);
    Serial.println("Opening Servo Motor!");
    moisture_servo.write(135);
    delay(5000);
    Serial.println("Closing!");
    moisture_servo.write(90); 
    flag = true;
    if(data){
        Serial.println("File Can Be Written.");
        data = SD.open("datalog.txt", FILE_WRITE);
        data.println("Wet Waste");
        data.close();
      } else {
        Serial.println("File Cannot Be Written.");
      }
    delay(1000);;
  }
  delay(100); 
}
void metal(){
  val = digitalRead(metal_pin);

  if (val==0){
    Serial.println("Metal Detected!");
    delay(10000);
    Serial.println("Opening Servo Motor!");
    metal_servo.write(135);
    delay(4000);
    Serial.println("Closing!");
    metal_servo.write(90);
    if (SD.exists("datalog.txt")) {
      Serial.println("File Exist!");
      if(data){
        Serial.println("File Can Be Written.");
        data = SD.open("datasensorlog.txt", FILE_WRITE);
        data.println("Metal Waste");
        data.close();
      } else {
        Serial.println("File Cannot Be Written.");
      }
    } else {
      Serial.println("File Doesn't Exist!");
    }
    
  }

  if (val==1){
    metal_servo.write(90);
  }
}
