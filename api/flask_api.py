from flask import Flask, request, jsonify
import tensorflow as tf
import pandas as pd
from joblib import load
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the preprocessor and model
preprocessor = load('../model/preprocessor.joblib')

custom_objects = {'mse': tf.keras.losses.MeanSquaredError()}

model = tf.keras.models.load_model('../model/Dragline_Factors.h5', custom_objects=custom_objects)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Extract and preprocess the input data
        input_data = request.json
        df = pd.DataFrame([input_data])
        preprocessed_data = preprocessor.transform(df)
        
        # Make a prediction
        prediction = model.predict(preprocessed_data)
        
        # Send back the prediction
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
