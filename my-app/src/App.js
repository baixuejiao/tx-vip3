import React from 'react';
import logo from './logo.svg';
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
  Redirect,
  Prompt
} from 'react-router-dom';
import Home from './views/Home'
import A from './views/A'
import B from './views/B'
import C from './views/C'
import E from './views/E'
import F from './views/F'
import G from './views/G'
function App() {
  return (
    <div className="App">
      <Router>
        <G></G>

        <NavLink to="/" activeClassName="selected">home</NavLink>|
        <NavLink to="/a/5" activeClassName="selected">a页面</NavLink>|
        <NavLink to={{ pathname: '/b', query: { id: 6 } }}>b页面</NavLink>|
        <NavLink to={{ pathname: '/c', state: { id: 7 } }}>c页面</NavLink>|
        <NavLink to="/d">d </NavLink>|
        <NavLink to="/children">children</NavLink>|
        <Link to="/home">home页</Link>|
        <Link to="/e">E页</Link>|
        <Link to="/f">F页</Link>
        {/* <Switch>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/" component={Home}></Route>
          </Switch> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/a/:id" exact component={A}></Route>
        <Route path="/b" exact component={B}></Route>
        <Route path="/c" exact component={C}></Route>
        <Route path="/d" exact render={() => {
          return (
            <div>
              <h2>你好呀！！！</h2>
            </div>
          )
        }}></Route>
        {/* <Route path="/children" children={(props) => {
          console.log(props)
          return (
            <h3>我是children</h3>
          )
        }}></Route> */}
        <Route path="/home" render={() => {
          return (
            <Redirect to="/"></Redirect>
          )
        }}></Route>
        <Route path="/e" component={E}></Route>
        <Route path="/f" component={F}></Route>
        

      </Router>
    </div>
  );
}

export default App;
