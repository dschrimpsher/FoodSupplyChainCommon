# Soil Senors

## Soil Moisture Sensor Interfacing with Arduino UNO

https://www.electronicwings.com/arduino/soil-moisture-sensor-interfacing-with-arduino-uno

Here, the analog output of soil moisture sensor is processed using ADC. The moisture content in terms of percentage is displayed on the serial monitor.

The output of the soil moisture sensor changes in the range of ADC value from 0 to 1023.

This can be represented as moisture value in terms of percentage using formula given below.

Analog Output = \frac{ADCValue}{1023}
Moisture in percentage = 100 – (Analog output * 100)

For zero moisture, we get maximum value of 10-bit ADC, i.e. 1023. This, in turn, gives 0% moisture.

------
## NBL-S-THR/Soil temperature and moisture sensors
Changsha Zoko Link Technology Co., Ltd

https://www.niubol.com/static/upload/file/20220917/NBL-S-THR-Soil-temperature-and-moisture-sensors-Instruction-Manual-V4.0.pdf

soil temperature and
moisture sensor is a high-precision, high-sensitivity soil moisture measuring
instrument. The electromagnetic wave pulse
emitted by the sensor is transmitted to the
probe through the coaxial cable, and then
enters the soil medium to measure the
apparent dielectric constant of the soil, thereby
obtaining the real water content of the soil. The
influence of metal ions, etc. This instrument can
be widely used in soil moisture monitoring, water-saving irrigation, greenhouses, grassland
pastures, soil speed measurement and other
fields

Output: RS485

### Method of Calculation
Current type (3-wire 4～20mAoutput) calculation:

 - Soil moisture R=(I-4)/16 × 100%
 - Soil temperature T = (I-4) / 16×150-50

Voltage type (0～5V output) calculation:
 - Soil moisture R=V/ 5 × 100%
 - Soil temperature T=V/ 5 × 150-50