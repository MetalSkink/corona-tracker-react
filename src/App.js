import React, { useEffect, useState } from 'react'
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

const App = () => {

  const [state, setState] = useState({})

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchData();
      setState(data)
    };

    fetching();
    
  }, [])

  return (
    <div className={styles.container}>
      <Cards data={state}/>
      <CountryPicker/>
      <Chart/>
    </div>
  )
}

export default App
