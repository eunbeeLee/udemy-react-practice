import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState ({
    persons: [
      {name: 'eunbee', age:'30'}
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'change'})

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // DON'T DO THIS!  
    // this.state.persons[0].name = 'lee'
    setPersonsState({
      persons : [
        {name: 'lee', age:'14'}
      ]
    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>switch</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
          Hello!
      </Person>
    </div>
  );
}

export default App;
