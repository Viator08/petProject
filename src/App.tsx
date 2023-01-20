import React, { Component } from 'react';
import { Button } from './packages';

class App extends Component {
  render() {
    return (
      <>
        <div className="appbody">
          <h1>Hello world !</h1>
          <Button label={'кнопка 1'} />
          <Button label={'кнопка 2'} isDisabled />
        </div>
      </>
    );
  }
}

export default App;
