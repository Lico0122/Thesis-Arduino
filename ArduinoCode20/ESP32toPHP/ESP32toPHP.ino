#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WebServer.h>


#include <SoftwareSerial.h>
#include <ArduinoJson.h> 


//my network credentials
const char* ssid = "";
const char* password = "";

String serverName = "http://";


//ESP8266WebServer server(80); //create object on port 80

String page = "";
double data;

int sensor_level;

  SoftwareSerial Arduino_Serial(D6, D5);
  
void setup() {
          
  
  // put your setup code here, to run once:
  //init serial port
  Serial.begin(9600);
  Arduino_Serial.begin(9600);
  WiFi.begin(ssid, password); //connect to wifi

  //wait for connection
  while (WiFi.status() !=WL_CONNECTED){
    delay(500);
    Serial.print(".");
    }
    Serial.println("");
    Serial.print("Connected to ");
    Serial.println(ssid);
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    delay(10000);
  while (!Serial) continue;
  
}

void loop(void) {
  // put your main code here, to run repeatedly:
  StaticJsonBuffer<1000> jsonBuffer;
  JsonObject& data = jsonBuffer.parseObject(Arduino_Serial);

  if (data == JsonObject::invalid()){
    Serial.println("Invalid Json Object");
    jsonBuffer.clear();
    return;
    }

    Serial.println("JSON object Recieved");
    sensor_level = data["Sensor Level"];
    int distance_1 = data["Distance 1"];
    int distance_2 = data["Distance 2"];
    float humidity = data["Humidity"];
    float ph_level = data["ph Level"];
    //  server.handleClient();

    GET_request(".php?soil_value=" + String(distance_1)+ "&ph_value=" +String(distance_2)+ "&water_value=" +String(water_level)); 
    delay(2000);
}
