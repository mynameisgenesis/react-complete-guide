import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Genesis', age: 28},
      {id: 2,name: 'Carmine', age: 42}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); 

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} click={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangeHandler(event, person.id)} name={person.name} age={person.age} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
