/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Soil composition measurement event
* Raw sensor payment received in the integration layer and converted into  this common model to generate an event for the information layer. 
*
* composition Composition  (optional)
* no response value expected for this operation
* */
const soilCompositionsPOST = ({ composition }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        composition,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Soil conditions measurement event
* Raw sensor payment received in the integration layer and converted into  this common model to generate an event for the information layer. 
*
* condition Condition  (optional)
* no response value expected for this operation
* */
const soilConditionsPOST = ({ condition }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        condition,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Soil nutrient measurement event
* Raw sensor payment received in the integration layer and converted into  this common model to generate an event for the information layer. 
*
* nutrient Nutrient  (optional)
* no response value expected for this operation
* */
const soilNutrientsPOST = ({ nutrient }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        nutrient,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Soil composition measurement event
* Raw sensor payment received in the integration layer and converted into  this common model to generate an event for the information layer. 
*
* precipitation Precipitation  (optional)
* no response value expected for this operation
* */
const weatherPrecipitationPOST = ({ precipitation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        precipitation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Soil composition measurement event
* Raw sensor payment received in the integration layer and converted into  this common model to generate an event for the information layer. 
*
* temperature Temperature  (optional)
* no response value expected for this operation
* */
const weatherTemperaturePOST = ({ temperature }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        temperature,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  soilCompositionsPOST,
  soilConditionsPOST,
  soilNutrientsPOST,
  weatherPrecipitationPOST,
  weatherTemperaturePOST,
};
