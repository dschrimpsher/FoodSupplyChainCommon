import requests
from pydantic import BaseModel
from typing import Optional

# Base URL for the API
BASE_URL = "http://localhost:3000"


# Nutrient schema based on the OpenAPI spec
class Nutrient(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    ph: Optional[float] = None


# Condition schema based on the OpenAPI spec
class Condition(BaseModel):
    moisture: float
    temperature: float
    compaction: Optional[float] = None


# Function to generate nutrient data and send a POST request
def post_nutrient_data():
    # Example data generation for Nutrient
    nutrient_data = Nutrient(
        nitrogen=1.5,
        phosphorus=0.8,
        potassium=0.6,
        ph=6.8
    )

    response = requests.post(f"{BASE_URL}/soil/nutrients", json=nutrient_data.model_dump())

    if response.status_code == 200:
        print("Nutrient event successfully sent!")
    else:
        print(f"Failed to send nutrient data. Status code: {response.status_code}, Response: {response.text}")


# Function to generate condition data and send a POST request
def post_condition_data():
    # Example data generation for Condition
    condition_data = Condition(
        moisture=12.5,
        temperature=22.3,
        compaction=0.4
    )

    response = requests.post(f"{BASE_URL}/soil/conditions", json=condition_data.dict())

    if response.status_code == 200:
        print("Condition event successfully sent!")
    else:
        print(f"Failed to send condition data. Status code: {response.status_code}, Response: {response.text}")


# Example usage
if __name__ == "__main__":
    post_nutrient_data()
    post_condition_data()
