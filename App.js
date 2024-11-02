import './App.css';
import React, { useEffect } from 'react';
import { initializeWeb3 } from './BugBountyInterface';
import PostBountyForm from './PostBountyForm';
import SubmitReportForm from './SubmitReportForm';
import ReleaseRewardButton from './ReleaseRewardButton'


function App() {
  useEffect(() => {
    initializeWeb3();  // Initialize Web3 on app load
  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockchain Bug Bounty Platform</h1>
        <p>Post bounties, submit bug reports, and manage rewards on the blockchain.</p>
      </header>
      
      <main>
        <PostBountyForm />
        <SubmitReportForm />
        <ReleaseRewardButton />
      </main>
    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
















