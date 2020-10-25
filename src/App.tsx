import { hot } from 'react-hot-loader';
import React from 'react';
import styles from './App.css';

const App = () => {
  return <p className={styles.hello}>Hello!</p>;
};

export default hot(module)(App);
