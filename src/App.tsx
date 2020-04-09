import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/Layout/Layout';

function App() {
  const menuArray = [
    {
      key: '1',
      description: 'subnav 1',
      role: 'student',
      isdefaultOpenKey: true,
      children: [
        {
          key: '1_1',
          parentKey: '1',
          title: 'option1',
          isdefaultSelectedKey: true
        },
        {
          key: '1_2',
          parentKey: '1',
          title: 'option2',
          isdefaultSelectedKey: false
        },
        {
          key: '1_3',
          parentKey: '1',
          title: 'option3',
          isdefaultSelectedKey: false
        }
      ]
    },
    {
      key: '2',
      description: 'subnav 2',
      role: 'student',
      isdefaultOpenKey: false,
      children: [
        {
          key: '2_1',
          parentKey: '1',
          title: 'option4',
          isdefaultSelectedKey: false
        },
        {
          key: '2_2',
          parentKey: '1',
          title: 'option5',
          isdefaultSelectedKey: false
        }
      ]
    }
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LayoutComponent menuArray={menuArray} />
    </div>
  );
}

export default App;
