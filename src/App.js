import React, { Component } from 'react';
import './App.css';
import Note from './components/note';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todoText: "",
      notes: []
    }
  }

  updateText(text){
    this.setState({
      todoText: text.target.value
    })
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter"){
      let notesArray = this.state.notes;
      notesArray.push(this.state.todoText);
      this.setState({
        todoText: ""
      })
    }
  }

  addNote(){
    if (this.state.todoText === ''){
      return false;
    }
    
    let notesArray = this.state.notes;
    notesArray.push(this.state.todoText);
    this.setState({
      todoText: ""
    })
    this.input.focus();

  }

  deleteNote(index) {
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({
      notes: notesArray
    });
  }

  render() {

    let notes = this.state.notes.map((val, key) =>{
      return <Note key={key} text={val} delete={() => this.deleteNote(key)} />
    });

    return (
      <div className="container">

        <div className="header">TODO</div>
        
        <div className="add-button" onClick={() => this.addNote(this)}>+</div>
        <input 
          type="text"
          ref = {(input) => {this.input = input}}
          className="input"
          placeholder="New Item..." 
          value={this.state.todoText} 
          onChange = {text => this.updateText(text)}
          onKeyPress = {this.handleKeyPress}
        />
        {notes}
      </div>

    );
  }
}

export default App;