import React from 'react';
import './App.css';
import {Button} from 'antd'

function App() {
  return (
    <div className="App">
      <Button type={'primary'} onClick={() => alert(1)}>开始</Button>
        <div style={{
          width: 100,
          background: 'red',
          wordWrap: 'break-word'
        }}>
          rwerewrewrrwerewrewrrwerewrewrrwerewrewrrwerewrewrrwerewrewrrwerewrewrrwerewrewr
        </div>
    </div>
  );
}

export default App;
