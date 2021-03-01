import React from 'react'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DocList from './pages/DoctorListPage/DoctorListPage';

function App() {
  return (
    <div >
    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/categories/:id" component={DocList}/>
    </Switch>
    </div>
  );
}

export default App;
