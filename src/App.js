import React from 'react';
import './App.css';
import Forecast from './components/Forecast';

function App() {
  return (
    <>
      <main role='main' className='flex-shrink-0'>
        <div className='container text-center'>
          <img src='weather-logo.png' alt='weather-logo' width='300px' />
          <h1 className='mt-5 text-center'>REACT WEATHER APP</h1>
          <p className='lead text-center'>get your local weather</p>
        </div>
        <Forecast />
      </main>

      <footer className='sticky-footer mt-auto py-3'>
        <div className='container'>
          <span className='text-muted'>made with &hearts; by handrei.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
