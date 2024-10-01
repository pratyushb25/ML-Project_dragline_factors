# Dragline Performance Estimation Model

## Introduction

I started this project to improve my understanding of analytics and programming concepts while tackling a real-world problem that's unique and typically stays under the radar. I've created a machine learning model that aims to predict pass factors and volumes based on operational data from draglines, some of the largest machines used in surface mining. This can significantly reduce the time required for planning and designing for a mine site. It can also be applied in related industries such as construction in the future.

Taking the project a step further, I created a user interface using Flask for the API and React for interactions. This lets a user interact with the pre-trained model. Users can input data through a web form and receive predictions immediately. I chose Flask for its simplicity and flexibility, I set up a web server capable of serving the machine learning model's API. I used react to build the interactive UI (because I want it to look nice)

<div style="text-align: center;">
    <img src="https://github.com/pratyushb25/dragline_factors/assets/114146978/e430ac01-b208-4801-95f4-f2bf1dda4869" width="400">
</div>
    
<div style="text-align: center;">
    <img src="https://github.com/pratyushb25/dragline_factors/assets/114146978/32af6262-c5f9-42ee-aae4-c35932c318f3" width="400">
</div>  


## Getting Started

Instructions to guide you through setting up the project on your local machine for development and testing purposes

### Prerequisites

- Python 3.8 or above
- pip and virtualenv
- TensorFlow 2.x
- Jupyter Notebook or Google Colab for model and visualisations
  
### Installation

1. Clone the repository:
   ```
   git clone https://github.com/pratyushb25/dragline_factors.git
   ```
2. Navigate to the project directory:
   ```
   cd dragline_factors
   ```
3. Create and activate a virtual environment (I prefer to isolate package installations, but not necessary):
   ```
   virtualenv venv
   # On Windows use `venv\Scripts\activate`
   # on Max and Linux use `source venv/bin/activate`
   ```
4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Usage

To run the model and view predictions:
1. Open the Jupyter Notebook:
   ```
   jupyter notebook dragline_model.ipynb
   ```
2. Execute the notebook cells sequentially to train the model and view predictions. Change model parameters or test data if you want to. 

To interact with the model via the user interface:
1. Ensure the Flask API is running:
   ```
   cd api
   python flask_api.py
   ```
2. In a separate terminal, start the React application:
   ```
   cd webapp
   npm start
   ```

## Data Description

The dataset used (`Dragline Factors V1.xlsx`) includes operational parameters and simulated pass factors for draglines. Inputs include Dragline type, method, and operational envelope, while outputs are the pass factors for multiple operational steps. The data is contextual for mining and machinery fields, but general concept of predicting outputs from historic data still remains. 

### Columns
- Input: Dragline, Method, Dip, Width, Coal Thickness, Pass Thicknesses
- Output: Cast Factors, Dozer Push Factors, Dragline Factors, Total Prime Factors
It's recommended to keep the input and output columns in their original place because the model relies on Excel's column labels to interact with the data.
- The grey columns were not incorporated within the model, frankly I don't know enough about mining machinery to understand what they mean

## Model Details

The model is a deep neural network built using TensorFlow and Keras, structured as follows:
- Multiple dense layers with ReLU activation
- Dropout for regularisation
- Mean squared error loss function
- Adaptive learning rate scheduling

The model can be improved to keep predictions within set thresholds.

## Results and Evaluation

I evaluated the model's performance by running the test set through the model. You can create a custom test set by simply modifying the excel sheet (keep in mind the model only picks up on specific columns). I present a comparison of actual vs. predicted values and mean absolute errors in graphs and tables within the notebook.

## Built With

- TensorFlow - my choice of libary to create deep learning models (because it's open source and the first one I learnt)
- Pandas - for data manipulation
- NumPy - data manipulation and fitting
- Scikit-Learn - for data preprocessing and model evaluation
- Matplotlib - creating visualisations
- Flask - for creating a lightweight api to serve the trained model
- React - framework for making things look nice

## Contributing

Any contributions as well as general feedback is greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/MyCoolNewFeature`)
3. Commit your Changes (`git commit -m 'Add some MyCoolNewFeature'`)
4. Push to the Branch (`git push origin feature/MyCoolNewFeature`)
5. Open a Pull Request

## Author

**Pratyush Bharadwaj** - [pratyushb25](https://github.com/pratyushb25)

## Contact Information

- Email: 1125.pratyushb@gmail.com
- LinkedIn: www.linkedin.com/in/pratyush-bharadwaj25
