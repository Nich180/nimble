import React, { ReactElement } from 'react';
import logo from './assets/nimble_icon.svg';
import logoText from './assets/nimble_logo_text.svg';
import './App.css';
import { Repayments } from './components/Repayments';
import { AppHeader, Img } from './styledComponents/appHeader';

function App(): ReactElement {
  return (
    <div className="App">
      <AppHeader>
        <Img src={logo} alt="logo" hasMargin />
        <Img src={logoText} alt="logo" hasMargin={false} />
      </AppHeader>
      <Repayments />
    </div>
  );
}

export default App;
