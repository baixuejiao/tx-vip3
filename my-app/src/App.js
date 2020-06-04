import React from 'react';
import logo from './logo.svg';
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/Home'
import A from './views/A'
import B from './views/B'
import C from './views/C'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">home</Link>|
        <Link to="/a/5">a页面</Link>|
        <Link to={{ pathname: '/b', query: { id: 6 } }}>b页面</Link>|
        <Link to={{ pathname: '/c', state: { id: 7 } }}>c页面</Link>|
        <Link to="/d">d </Link>|
        <Link to="/children">children</Link>
        {/* <Switch>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/" component={Home}></Route>
          </Switch> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/a/:id" exact component={A}></Route>
        <Route path="/b" exact component={B}></Route>
        <Route path="/c" exact component={C}></Route>
        <Route path="/d" exact render={()=>{
          return (
            <div>
              <h2>你好呀！！！</h2>
            </div>
          )
        }}></Route>
        <Route path="/children" children={(props)=>{
          console.log(props)
          return (
            <h3>我是children</h3>
          )
        }}></Route>

      </Router>
    </div>
  );
}

export default App;
