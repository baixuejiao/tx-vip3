import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Row>
          <Col span={4} className="nav">
              <Nav></Nav>
          </Col>
          <Col span={20}> right</Col>
      </Row>
    </div>
  );
}

export default App;
