import React, { Component } from 'react';
import AuthPage from '../pages/authentication';
import '../shared/styles/base';
import { Button } from '../shared/UIKit/components/button';
import { InputText } from '../shared/UIKit/components/input';

class App extends Component {
  render() {
    return (
      <div>
        ghbdtn rfr ltkf
        <InputText value={'Привет'} label={'Ваше имя'} />
        <InputText value={'Пока'} />
        <InputText value={'До свидания'} size={'small'} />
        <InputText value={'как делаё?'} size={'small'} />
        <InputText value={'Длинный тест в кнопке'} size={'large'} />
        <InputText value={'Привет'} size={'large'} />
        <InputText value={'Привет'} size={'large'} />
        <Button label={'До свидания'} size={'small'} />
        <Button label={'как делаё?'} size={'small'} />
        <Button label={'Длинный тест в кнопке'} />
        <Button label={'Привет'} size={'medium'} shape={'circle'} />
        <Button label={'Привет'} size={'large'} />
      </div>
    );
  }
}

export default App;
