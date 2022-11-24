import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [""]
     };
  }

  componentDidMount() {
    this.addFormFields();
  }
  
  handleChange(i, e) {
     let formValues = this.state.formValues;
     formValues[i] = e.target.value;
     this.setState({ formValues });
   }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, ""]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  sortFormFields() {
    let formValues = this.state.formValues;
    formValues = formValues.sort();
    this.setState({ formValues });
  }

  render() {

    return (
        <form>
          {this.state.formValues.map((element, index) => (
            <div className="form-row" key={index}>
              <div className="form-group form-inline justify-content-center"> 
              <div className="form-group col-md-1"><label>Input field:</label></div>
              <div className="form-group col-md-4"><input className="form-control" type="text" name="txtInput" value={element|| ""} onChange={e => this.handleChange(index, e)}  /></div>
              {
                index > 1 ? 
                <div className="form-group col-md-1"><button type="button" className="btn btn-danger remove" onClick={() => this.removeFormFields(index)}>Remove</button></div> 
                : <div className="form-group col-md-1">&nbsp;</div>
              }
              </div>  
            </div>
          ))}
          <div className="form-row">
            <div className="button-section">
                <button className="btn btn-primary" type="button" onClick={() => this.addFormFields()}>Add</button>
                <span className="mr-3">&nbsp;&nbsp;&nbsp;</span>
                <button className="btn btn-secondary" type="button" onClick={() => this.sortFormFields()}>Sort</button>
            </div>
          </div>
      </form>
    );
  }

}
export default App;

