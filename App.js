import React, { Component } from "react"; 
import axios from "axios"; 
import "./App.css"; 
 
class App extends Component { 
  state = { 
    value1: "", 
    value2: "", 
    value3: "", 
    value4: "", 
    value5: "", 
    value6: "", 
    prediction: null, 
    error: null, 
  }; 
 
  handleChange = (e) => { 
    this.setState({ 
      [e.target.name]: e.target.value, 
    }); 
  }; 
 
  handleSubmit = (e) => { 
    e.preventDefault(); 
    const { value1, value2, value3, value4, value5, value6} = this.state; 
 
    axios.post("http://127.0.0.1:8000/", { 
        v1: value1, 
        v2: value2, 
        v3: value3, 
        v4: value4, 
        v5: value5, 
        v6: value6
      }) 
      .then((response) => { 
        this.setState({ prediction: response.data.prediction, error: null }); 
      }) 
       
  }; 
 
  render() { 
    const { value1, value2, value3, value4, value5, value6, prediction, error } = 
this.state; 
 
    return ( 
 
      <div class="App"> 
        <h1>Heart Disease Prediction</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name='value1' value={value1} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="restingBP">Resting Blood Pressure:</label>
          <input type="number" id="restingBP" name='value2' value={value2} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="cholesterol">Cholesterol:</label>
          <input type="number" id="cholesterol" name='value3'  value={value3} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="restingECG">Resting ECG:</label>
          <input type="number" id="restingECG" name='value4'  value={value4} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exerciseAngina">Exercise-Induced Angina:</label>
          <input type="number" id="exerciseAngina" name='value5'  value={value5} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="oldpeak">ST Depression Induced by Exercise Relative to Rest:</label>
          <input type="number" id="oldpeak" name='value6'  value={value6} onChange={this.handleChange}/>
        </div>
        <button type="submit">Predict</button>
      </form> 
 
        {prediction !== null && ( 
          <div> 
            <h2 style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>Prediction:</h2> 
            <p style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>{prediction}</p> 
          </div> 
        )} 
        {error && <div>Error: {error}</div>} 
      </div> 
    ); 
  } 
} 
 
export default App;
