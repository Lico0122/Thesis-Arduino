#include <SD.h>
#include <SPI.h>

#include <Wire.h>

#include <EEPROM.h>
#include <SoftwareSerial.h>
#include <ArduinoJson.h>

const int trigPin_1 = 6;
const int echoPin_1 = 7;
const int trigPin_2 = 8;
const int echoPin_2 = 9;
const int trigPin_3 = 10;
const int echoPin_3 = 11;
const int trigPin_4 = 12;
const int echoPin_4 = 13;
// defines variables
long duration_1;
long duration_2;
long duration_3;
long duration_4;
int distance_1;
int distance_2;
int distance_3;
int distance_4;

void setup() {
  pinMode(trigPin_1, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin_1, INPUT); // Sets the echoPin as an Input
  pinMode(trigPin_2, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin_2, INPUT); // Sets the echoPin as an Input
  pinMode(trigPin_3, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin_3, INPUT); // Sets the echoPin as an Input
  pinMode(trigPin_4, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin_4, INPUT); // Sets the echoPin as an Input
  Serial.begin(9600); // Starts the serial communication
}
void loop() {
  sensor_1();
  sensor_2();
  sensor_3();
  sensor_4();
  delay(300);
}
void sensor_1() {
  // Clears the trigPin
  digitalWrite(trigPin_1, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin_1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin_1, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration_1 = pulseIn(echoPin_1, HIGH);
  // Calculating the distance
  distance_1 = (duration_1/2) / 29.1; 
  // Prints the distance on the Serial Monitor
  Serial.print("Distance1: ");
  Serial.print(distance_1);
  Serial.println("cm");
  delay(200);
}
void sensor_2() {
  // Clears the trigPin
  digitalWrite(trigPin_2, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin_2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin_2, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration_2 = pulseIn(echoPin_2, HIGH);
  // Calculating the distance
  distance_2 = (duration_2/2) / 29.1; 
  // Prints the distance on the Serial Monitor
  Serial.print("Distance2: ");
  Serial.print(distance_2);
  Serial.println("cm");
  delay(200);
}
void sensor_3() {
  // Clears the trigPin
  digitalWrite(trigPin_3, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin_3, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin_3, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration_3 = pulseIn(echoPin_3, HIGH);
  // Calculating the distance
  distance_3 = (duration_3/2) / 29.1; 
  // Prints the distance on the Serial Monitor
  Serial.print("Distance3: ");
  Serial.print(distance_3);
  Serial.println("cm");
  delay(200);
}
void sensor_4() {
  // Clears the trigPin
  digitalWrite(trigPin_4, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin_4, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin_4, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration_4 = pulseIn(echoPin_4, HIGH);
  // Calculating the distance
  distance_4 = (duration_4/2) / 29.1; 
  // Prints the distance on the Serial Monitor
  Serial.print("Distance4: ");
  Serial.print(distance_4);
  Serial.println("cm");
  delay(200);
}
