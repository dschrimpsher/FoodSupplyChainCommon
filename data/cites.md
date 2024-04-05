# Soil Data Repos

Search: https://datasetsearch.research.google.com/search?src=0&query=agriculture%20soil%20sensor%20data&docid=L2cvMTFzdzI5MTJkZg%3D%3D

## Gasch, Caley; Brown, David (2017). 
Data from: A field-scale sensor network data set for monitoring and modeling the spatial and temporal variation of soil moisture in a dryland agricultural field. Ag Data Commons. Dataset. 
https://doi.org/10.15482/USDA.ADC/1349683

Automated in situ soil sensor network - the data set includes hourly and daily measurements of volumetric water content, soil temperature, and bulk electrical conductivity, collected at 42 monitoring locations and 5 depths (30, 60, 90, 120, and 150 cm) across Cook Agronomy Farm. Data collection was initiated in April 2007 and is ongoing.

### Description
#### Tabular data
CAF_sensors: folder with Daily and Hourly subfolders, each containing 42 '.txt' files of water content and temperature sensor readings. Each file represents readings from a single location, indicated in the file name (i.e. CAF003.txt) and in the 'Location' field of the table. Readings are organized by 'Date' (4/20/2007 - 6/16/2016), ‘Time’ (24 hr clock, only in hourly files), and with property (VW or T) and sensor 'Depth' as follows:

- VW_30cm: volumetric water readings at 30 cm depth (m^3/m^3)
- VW_60cm: volumetric water readings at 60 cm depth (m^3/m^3)
- VW_90cm: volumetric water readings at 90 cm depth (m^3/m^3)
- VW_120cm: volumetric water readings at 120 cm depth (m^3/m^3)
- VW_150cm: volumetric water readings at 150 cm depth (m^3/m^3)
- T_30cm: temperature readings at 30 cm depth (C)
- T_60cm: temperature readings at 60 cm depth (C)
- T_90cm: temperature readings at 90 cm depth (C)
- T_120cm: temperature readings at 120 cm depth (C)
- T_150cm: temperature readings at 150 cm depth (C)

Volumetric water content readings are calibrated according to: Gasch, CK, DJ Brown, ES Brooks, M Yourek, M Poggio, DR Cobos, CS Campbell. 2017. A pragmatic, automated approach for retroactive calibration of soil moisture sensors using a two-step, soil specific correction. Computers and Electronics in Agriculture, 137: 29-40. Temperature readings are factory calibrated.

- CAF_BulkDensity.txt: file containing bulk density values ('BulkDensity' in g/cm^3) for sensor depths at each of the 42 instrumented locations at Cook Farm. Location is indicated in 'Location' field, and sample depths are defined (in cm) by the ’Depth’ field.

- CAF_CropID.txt: file containing crop codes for each sub-field (A, B and C) and strip (1-6 for A and B, 1-8 for C) at Cook Farm for 2007-2016. This is also part of the attribute table for 'CAF_strips.shp'

- CAF_CropCodes.txt: file containing crop code names and crop identities, used in 'CAF_CropID.txt' and 'CAF_strips.shp'

- CAF_ParticleSize.txt: file containing particle size fractions ('Sand', 'Silt', and 'Clay' as percent) for each 'Location' at sensor depths ('Depth', in cm).


#### Spatial data

All spatial data have spatial reference NAD83, UTM11N

- CAF_sensors.shp: file containing locations of each of the 42 monitoring locations, the 'Location' field contains the location name, which coincides with locations in tabular files.

- CAF_strips.shp: file containing areal extents of each sub-field, stip, and crop identities for 2007-2016. Crop identity codes are listed in 'CAF_CropCodes.txt'

- CAF_DEM.tif: file containing a 10 x 10 m elevation (in m) grid for Cook Farm.

- CAF_Spring_ECa.tif, CAF_Fall_ECa.tif: files containing 10 x 10 m apparent electrical conductivity (dS/m) grids to 1.5 m depth for spring and fall at Cook Farm.

- CAF_Bt_30cm.tif, CAF_Bt_60cm.tif, CAF_Bt_90cm.tif, CAF_Bt_120cm.tif, CAF_Bt_150cm.tif: files containing 10 x 10 m predictive surfaces for probability (0-1) of Bt horizon at the five sensor depths.


#### Quality Control

The Flags folder consists of the files containing the quality control flags for the Cook Farm Sensor Dataset.

The nomenclature for the files indicates flags for either temperature (T) or water content (VW) and sensor depths. For example:

- T_30 is for the temperature data at 30cm. depth

- VW_120 is for the Volumetric water content at 120 cm. depth

Files starting with “missing” contain flags (“M”) for locations and dates (mm/dd/yyyy) with missing data (NA in original dataset).

Files starting with “range” contain flags for locations and dates (mm/dd/yyyy) with values outside acceptable ranges:

- Soil moisture (0-0.6 m^3/m^3) flagged as “C”

- Soil temperature (<0 deg. C) flagged as “D”
- Files starting with the name “flats” contain flags (“D”) for locations, dates (mm/dd/yyyy), and times (hh:mm) with constant values (within 1%) for a 24 hour period, as in Dorigo et al. 2013.

Files starting with the name “spikes” contain flags (“D”) for locations, dates (mm/dd/yyy), and times (hh:mm) with sudden spikes in VWC readings.

Files starting with the name “breaks” contain flags (“D”) for locations, dates (mm/dd/yyy), and times (hh:mm) with sudden breaks (jumps or drops) in VWC readings.

Code (implemented in R) for the screening and flagging is included in “Code Snippet.txt”

A list of the sensor versions as of 06/16/16 at each location and depth.

------

## Kaur, Amritpal; Bhatt, Devershi Pallavi; Raja, Linesh (2023), 
“Soil Moisture, Air temperature, humidity, and Motor on/off Monitoring data”, Mendeley Data, V1, 
doi: 10.17632/fpdwmm7nrb.1

### Description

Automated irrigation systems are emerging methods for irrigation crops with the required amount of water, which conserves water wastage and avoids overirrigating crops. To train the automated irrigation method, we require the data set for better decision-making and controlling the irrigation system. The data set is collected from various sensors, for example, Capacitive soil moisture sensors and DHT-11 sensors. These data sets can be used to analyze and make decisions about controlling the automated irrigation system. Soil moisture, air temperature, and humidity are measured, and based on the soil moisture, the water motor's on/off status can be controlled.

------

## Manzano, Jose Maria; Orihuela, Luis; Tapia Córdoba, Alejandro; Pacheco, Erid; Bareiro, Jorge (2023), 

“Smart irrigation control system data with soil moisture, flow meter and electrovalve relay”, Mendeley Data, V3, 
doi: 10.17632/cjb4vy4mzj.3

### Description

This data set contains measurements of soil moisture, a flow meter, and the relay status of an electrovalve deployed in a smart irrigation control system. The system has been working succesfully for over two months in a strawberry field in production in Paraguay, 2022. The details of the experiments have been sent as a possible publication to the Journal of Irrigation and Drainage Engineering, under the title Deployment of a smart irrigation control system with capacity-based moisture sensors on a field in production, by L. Orihuela, E. Pacheco, J. Bareiro, A. Tapia and J.M. Manzano.

Data collected from July 12 2022 until September 17 2022 is presented. Three data sets are provided, in a CSV format, namely D_moisture, D_valve and D_flowmeter. The three of them contain 2 columns each, and each row is a new measurement collected from the field. In the three of them, the second column, named 'time_stamp' refers to the time stamp of the measurement, in format 'DD-MMM-YYYY hh:mm:ss', expressed in UTC coordinates. The first column indicates the measurement itself, them being:

- In D_moisture: the measured soil moisture, measured as a percentage and collected as explained in the mentioned paper. The sampling time is about 20 minutes. It contains 4293 rows.
- In D_flowmeter: the cumulative sum of the water volume that has been applied to the field, as measured by the flow meter installed, measured in litres since July 1st 2022. The sampling time is about 5 minutes. It contains 17411 rows.
- In D_valve: the state commanded to the relay incharge of the electrovalve in the irrigation system. 1 implies 'open' and 0 implies 'close'. The sampling time is about 5 minutes. It contains 17427 rows.

The dataset is open to be used by any researcher, in studies related to machine learning, agricultural soil monitoring or estimation and irrigation control, among others. Citing the aforementioned work is appreciated.

------

## Manzano, Jose Maria; Orihuela, Luis; Pacheco, Erid; Pereira, Mario (2023), 

“Soil moisture and temperature data in agricultural soil”, Mendeley Data, V2, 
doi: 10.17632/fpbfmc9vnm.2

Data at:    https://data.mendeley.com/datasets/fpbfmc9vnm/2

### Description
This data set contains measurements of soil moisture and temperature collected at a sugar cane crop field in Paraguay, 2022.

Data collected from 13:00:00 (UTC) on March 09th 2022 until 03:00:00 March 31st 2022 is presented. In the database, the time coordinate is expressed in hours, relative to the first measurement. It contains 15776 data points. The data is structured in two CSV files, defined as follows:

- First table: measurement data, with the following fields:
    - Timestamp 't', with format DD-MMM-YYYY HH:mm:ss.
    - Node identifier 'Node_ID', which is an integer from 1 to 12.
    - Temperature 'z_T', measured in Celsius degrees.
    - Soil moisture 'z_M', measured as a percentage.

- Second table: context data, with the following fields:
    - Node identifier 'Node_ID'.
    - Coordinate x measured in meters.
    - Coordinate y measured in meters.

According to the manufacturer's specifications, the noise in the measurements is less than 2%. The dataset is open to be used by any researcher, in studies related to machine learning, agricultural soil monitoring or estimation, and Spatio-temporal dynamics or processes governed by partial differential equations, among others.