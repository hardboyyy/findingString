import React, { Component } from 'react'
export default class Text extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    findingString = (e) => {
        e.preventDefault();
        const textarea = this.state.textarea;
        const string = this.state.textbox;
        let countLine = -1;
        let count = 0;
        let position = textarea.indexOf(string);
        console.log("position of string in textarea",position);
        while(countLine < position){
         let countLine1 = textarea.indexOf("\n", countLine + 1);
         countLine = countLine1;
         console.log("counting line " , countLine1);
         count++;
        }
        console.log("line of string is :", count);
        
    }

  render() {
    console.log(this.state,"this.state")
    return (
      <div>
        <form onSubmit = {this.findingString}>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" name = "textarea" onChange = {this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="inputtext"></label>
                <input onChange = {this.handleChange} name = "textbox" className="form-control" id="inputtext" type="text" placeholder="Default input" />
            </div>
            <button type="button" onClick = {this.findingString} className="btn btn-primary">Find Text</button>
        </form>
      </div>
    )
  }
}
