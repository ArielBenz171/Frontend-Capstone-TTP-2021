import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Welcome, Home, Login, Signup, Recycle, Leaderboard } from '../views';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signUp' component={Signup}/>
      <Route exact path='/recycle' component={Recycle}/>
      <Route exact path='/leaderboard' component={Leaderboard}/>
    </Switch>
  );
};

export default RoutesView;