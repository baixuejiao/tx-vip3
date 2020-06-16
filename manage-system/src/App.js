import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Nav from './components/Nav'
import Header from './components/Header'
import IRoute from './Router/index'
function App() {
  return (
    <div className="App">
      <Row>
          <Col span={4} className="nav">
              <Nav></Nav>
          </Col>
          <Col span={20}> 
              <Header></Header>
              <IRoute></IRoute>
          </Col>
      </Row>
    </div>
  );
}

export default App;
