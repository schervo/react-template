// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

type Props = {
  component: Object,
  isAuth: boolean
}


const PrivateRoute = ({component: Component, isAuth}:Props) => {

  return (
    <Route render={props => (
      isAuth ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
      )
    )}
    />
  );
};



export default PrivateRoute
