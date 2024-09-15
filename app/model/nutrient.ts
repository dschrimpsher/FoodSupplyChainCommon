/**
 * Food Production Common API
 * Food Production Common API based on Reference Architectural Model Industrie 4.0 (RAMI 4.0)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Header, HeaderSchema } from './header';


export const NutrientSchema = {
  "properties": {
    "header": HeaderSchema,
    "phosphorus": {
      "format": "ppm",
      "type": "number"
    },
    "nitrogen": {
      "format": "ppm",
      "type": "number"
    },
    "potassium": {
      "format": "ppm",
      "type": "number"
    },
    "calcium": {
      "format": "ppm",
      "type": "number"
    },
    "magnesium": {
      "format": "ppm",
      "type": "number"
    },
    "sulfur": {
      "format": "ppm",
      "type": "number"
    },
    "salt": {
      "description": "Soil salinity is measured in units of electrical conductivity (EC), which is also known as Siemens (S).\nThe most common units of EC are deciSiemens per meter (dS/m)\n",
      "format": "dS/m",
      "type": "number"
    },
    "cationExchangeCapacity": {
      "type": "number",
      "description": "moving ions in the soil based on how much salt and how much water is in the soil.\n"
    },
    "zinc": {
      "format": "ppm",
      "type": "number"
    },
    "iron": {
      "format": "ppm",
      "type": "number"
    },
    "nutrientDeficiency": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "type": "object"
}

export interface Nutrient {
  header?: Header;
  phosphorus?: number;
  nitrogen?: number;
  potassium?: number;
  calcium?: number;
  magnesium?: number;
  sulfur?: number;
  /**
   * Soil salinity is measured in units of electrical conductivity (EC), which is also known as Siemens (S). The most common units of EC are deciSiemens per meter (dS/m)
   */
  salt?: number;
  /**
   * moving ions in the soil based on how much salt and how much water is in the soil.
   */
  cationExchangeCapacity?: number;
  zinc?: number;
  iron?: number;
  nutrientDeficiency?: Array<string>;
}

