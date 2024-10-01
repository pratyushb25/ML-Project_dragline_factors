# Dragline Performance Estimation Model

## Introduction

This project is designed to create a machine learning model that aids in the estimation of operational parameters for draglines, some of the largest machines used in surface mining. The model aims to predict various pass factors and volumes based on operational data, significantly reducing the time required for planning and designing for a mine site. This methodology has potential applications in related industries such as construction in the future. But it is important to note that these figures are rough estimates and can be used to support decisions, not make them. 

Taking the project a step further, I created a user interface using Flask for the API and React for interactions. This lets a user interact with the pre-trained model. This allows users to input data through a web form and receive predictions. I chose Flask for its simplicity and flexibility, which made it fast and straightforward to set up a web server capable of serving the machine learning model's API. React's component-based architecture was used to build a responsive and interactive UI.

<div style="text-align: center;">
    <img src="https://github.com/pratyushb25/dragline_factors/assets/114146978/e430ac01-b208-4801-95f4-f2bf1dda4869" width="400">
</div>
    
<div style="text-align: center;">
    <img src="https://github.com/pratyushb25/dragline_factors/assets/114146978/32af6262-c5f9-42ee-aae4-c35932c318f3" width="400">
</div>  


## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

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

The dataset used (`Dragline Factors V1.xlsx`) includes operational parameters and simulated pass factors for draglines. Inputs include Dragline type, method, and operational envelope, while outputs are the pass factors for multiple operational steps. The data is contextual for mining and machinery fields, but general concept calculating outputs from inputs still remains. 

### Columns
- Input: Dragline, Method, Dip, Width, Coal Thickness, Pass Thicknesses
- Output: Cast Factors, Dozer Push Factors, Dragline Factors, Total Prime Factors
It's recommended to keep the input and output columns in their original place because the model relies on Excel's column labels to interact with the data.
- The grey columns were not incorporated within the model. 

## Model Details

The model is a deep neural network built using TensorFlow and Keras, structured as follows:
- Multiple dense layers with ReLU activation
- Dropout for regularisation
- Mean squared error loss function
- Adaptive learning rate scheduling

## Results and Evaluation

The model's performance can be evaluated by running the test set through the provided notebook. You can create a custom test set by simply modifying the excel sheet (keep in mind the model only picks up on specific columns). A detailed comparison of actual vs. predicted values and mean absolute errors are presented in tabular and graphical forms within the notebook.

## Built With

- TensorFlow - An end-to-end open-source platform for machine learning.
- Pandas - Library for data manipulation and analysis.
- NumPy - Fundamental package for scientific computing with Python.
- Scikit-Learn - Tools for data mining and data analysis.
- Matplotlib - Library for creating static, animated, and interactive visualisations in Python.
- Flask - A lightweight WSGI web application framework.
- React - A JavaScript library for building user interfaces.

## Contributing

Any contributions as well as general feedback is greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/MyCoolNewFeature`)
3. Commit your Changes (`git commit -m 'Add some MyCoolNewFeature'`)
4. Push to the Branch (`git push origin feature/MyCoolNewFeature`)
5. Open a Pull Request

## Author

**Pratyush Bharadwaj** - [pratyushb25](https://github.com/pratyushb25)

## Acknowledgments

Neeraj K. for providing data

## Contact Information

- Email: 1125.pratyushb@gmail.com
- LinkedIn: www.linkedin.com/in/pratyush-bharadwaj25
