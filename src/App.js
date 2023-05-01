import React, { useState } from 'react';
import "./kidney.css"
function App() {
  
    const [formData, setFormData] = useState({
      sg : null,
      htn :2,
      hemo :null,
      dm : 2,
      al : null,
      appet : 2,
      rc : null,
      pc : 2 
    });
    const [resultText, setResultText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://healthapi-hhhf.onrender.com/kidney_prediction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.text())
      .then(text => setResultText(text))
      .catch(error => console.error(error));
    };
  
    const handleInputChange = (e) => {
      const target = e.target;
      const name = target.name;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    return (
      <div>
        <div className='dinpf'>
        <form onSubmit={handleSubmit}>
          <h3>
            Kidney Disease Prediction
          </h3>
          <div>
            <label>Specific Gravity:</label>
            <input type="number" name="sg" value={formData.sg} step="0.1" onChange={handleInputChange} />
          </div>
          <div>
            <label>Hypertension:</label>
            <select name="htn" value={formData.htn} step="0.1" onChange={handleInputChange} >
              <option value={2}>Select</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
              </select>
          </div>
          <div>
            <label>Hemoglobin:</label>
            <input type="number" name="hemo" value={formData.hemo} step="0.1" onChange={handleInputChange} />
          </div>
          <div>
            <label>Diabetes Mellitus:</label>
            <select name="dm" value={formData.dm} step="0.1" onChange={handleInputChange} >
            <option value={2}>Select</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
              </select>
          </div>
          <div>
            <label>Albumin:</label>
            <input type="number" name="al" value={formData.al} step="0.1" onChange={handleInputChange} />
          </div>
          <div>
            <label>Appetite:</label>
            <select name="appet" value={formData.appet} step="0.1" onChange={handleInputChange} >
            <option value={2}>Select</option>
              <option value={1}>Good</option>
              <option value={0}>Poor</option>
              </select>    
          </div>
          <div>
            <label>Red Blood Cell Count:</label>
            <input type="number" name="rc" value={formData.rc} step="0.1" onChange={handleInputChange} />
          </div>
          <div>
            <label>Pus Cell:</label>
            <select name="pc" value={formData.pc} step="0.1" onChange={handleInputChange} >
            <option value={2}>Select</option>
              <option value={1}>Normal</option>
              <option value={0}>Abnormal</option>
              </select>
          </div>
        <div className='predict-btn'>
          <button type="submit">Predict</button>
          </div>
          <div className='result'>
          {resultText}
        </div>
        </form>
        </div>
      </div>
    );
  
}

export default App