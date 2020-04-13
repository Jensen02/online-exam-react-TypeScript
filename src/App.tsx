import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserInfo from './pages/UserInfo/UserInfo';
import LayoutComponent from './components/Layout/Layout';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Redirect exact from='/' to='/login' />
          <Route exact path='/register' component={Register} />
          <Route path='/home' render={() => (
            <LayoutComponent menuArray={menuArray}>
              <Switch>
                <Redirect exact from='/home' to='home/user-info' />
                <Route exact path='/home/user-info' component={UserInfo} />
              </Switch>
            </LayoutComponent>
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
