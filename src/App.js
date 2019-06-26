import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Sample code for adding custom rules on top of MUI library</h5>
        <Box
          bgcolor="text.hint"
          color="primary.main"
          boxShadow={1}
          width={400}
          my={7}
          p={5}
        >
          Totally unacceptable box
          <br/><input type="text" />
          <br/>
          <table>
            <thead>
              <tr>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <a>link</a>
        </Box>
      </header>
    </div>
  );
}

export default App;
