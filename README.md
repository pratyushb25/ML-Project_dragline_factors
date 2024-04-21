# Dragline Performance Estimation Model

## Introduction

This project is designed to create a machine learning model that aids in the estimation of operational parameters for draglines, some of the largest machines used in surface mining. The model aims to predict various pass factors and volumes based on operational data, significantly reducing the time required for planning and enhancing operational efficiency. This methodology has potential applications in related industries such as construction in the future.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8 or above
- pip and virtualenv
- TensorFlow 2.x
- Jupyter Notebook or Google Colab for interactive development

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/dragline_factors.git
   ```
2. Navigate to the project directory:
   ```
   cd dragline_factors
   ```
3. Create and activate a virtual environment (optional but recommended):
   ```
   virtualenv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
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
2. Execute the notebook cells sequentially to train the model and view predictions.

## Data Description

The dataset used (`Dragline Factors V1.xlsx`) includes operational parameters and simulated pass factors for draglines. Inputs include Dragline type, method, and operational envelope, while outputs are the pass factors for multiple operational steps.

### Columns
- Input: Dragline, Method, Dip, Width, Coal Thickness, Pass Thicknesses
- Output: Cast Factors, Dozer Push Factors, Dragline Factors, Total Prime Factors

## Model Details

The model is a deep neural network built using TensorFlow and Keras, structured as follows:
- Multiple dense layers with ReLU activation
- Dropout for regularisation
- Mean squared error loss function
- Adaptive learning rate scheduling

## Results and Evaluation

The model's performance can be evaluated by running the test set through the provided notebook. A custom test set can be created by simply modifying the excel sheet (the code only picks up on specific columns). A detailed comparison of actual vs. predicted values and mean absolute errors are presented in tabular and graphical forms within the notebook.

## Built With

- TensorFlow - An end-to-end open-source platform for machine learning.
- Pandas - Library for data manipulation and analysis.
- NumPy - Fundamental package for scientific computing with Python.
- Scikit-Learn - Tools for data mining and data analysis.
- Matplotlib - Library for creating static, animated, and interactive visualisations in Python.

## Contributing

Any contributions as well as general feedback is greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

- **Pratyush Bharadwaj** - *Initial work* - [pratyushb25](https://github.com/pratyushb25)

## Acknowledgments
Neeraj K. for providing data

## Contact Information

- Pratyush Bharadwaj - your.email@example.com
- LinkedIn - www.linkedin.com/in/pratyush-bharadwaj25
- Project Link: [https://github.com/your-username/dragline_factors](https://github.com/your-username/dragline_factors)
