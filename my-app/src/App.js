import React, { useState } from 'react';
import './App.css';

function App() {
  // State hooks for each input
  const [dragline, setDragline] = useState('');
  const [method, setMethod] = useState('');
  const [dip, setDip] = useState('');
  const [width, setWidth] = useState('');
  const [coalthickness, setCoalThickness] = useState('');
  const [pass1thickness, setPass1Thickness] = useState('');
  const [pass2thickness, setPass2Thickness] = useState('');
  const [pass3thickness, setPass3Thickness] = useState('');

  const [formattedPredictions, setFormattedPredictions] = useState([]);

  const predictionHeaders = [
    "Total\\Cast Factor",
    "Total\\Dozer Push Prime Factor",
    "Total\\Dozer Push Total Factor",
    "Total\\Dragline Prime Factor",
    "Total\\Dragline Total Factor",
    "Total\\Poststrip Prime Factor",
    "Total\\Poststrip Total Factor"
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputData = {
      Dragline: dragline,
      Method: method,
      Dip: dip,
      Width: width,
      'Coal Thickness': coalthickness,
      'Pass 1 Thickness': pass1thickness,
      'Pass 2 Thickness': pass2thickness,
      'Pass 3 Thickness': pass3thickness
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const predictionValues = result.prediction[0]; 

      const formattedData = predictionValues.map((value, index) => {
        const formattedValue = Number(value).toFixed(3); // Format with 3 decimal places
        return {
          header: predictionHeaders[index],
          value: formattedValue
        };
      });
      setFormattedPredictions(formattedData);

    } catch (error) {
      console.error("Could not fetch predictions: ", error);
    } 
  };
  return (
    <div className="App">
      <h2>Inputs</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dragline">Dragline</label>
            <input type="text" id="dragline" placeholder="Type here..." value={dragline} onChange={(e) => setDragline(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="method">Method</label>
            <input type="text" id="method" placeholder="Type here..." value={method} onChange={(e) => setMethod(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="dip">Dip</label>
            <input type="number" id="dip" placeholder="Type here..." value={dip} onChange={(e) => setDip(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input type="number" id="width" placeholder="Type here..." value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="coalThickness">Coal Thickness</label>
            <input type="number" id="coalThickness" placeholder="Type here..." value={coalthickness} onChange={(e) => setCoalThickness(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="pass1thickness">Pass 1 Thickness</label>
            <input type="number" id="pass1thickness" placeholder="Type here..." value={pass1thickness} onChange={(e) => setPass1Thickness(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="pass2thickness">Pass 2 Thickness</label>
            <input type="number" id="pass2thickness" placeholder="Type here..." value={pass2thickness} onChange={(e) => setPass2Thickness(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="pass3thickness">Pass 3 Thickness</label>
            <input type="number" id="pass3thickness" placeholder="Type here..." value={pass3thickness} onChange={(e) => setPass3Thickness(e.target.value)} />
          </div>
        </div>
        <button className="runButton" type="submit">Run Model</button>
      </form>

      <div className="predictions">
          <h2>Predicted Outputs</h2>
          {formattedPredictions.length > 0 ? (
            <table>
              <tbody>
                {formattedPredictions.map((prediction, index) => (
                  <tr key={index}>
                    <th>{prediction.header}</th>
                    <td>{prediction.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
  );
}
  
export default App;
  
//git test comment 1