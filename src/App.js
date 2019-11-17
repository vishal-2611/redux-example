import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { plsadd, sayhi } from './redux/action';

import Home from './home';
function App(props) {
  console.log(props);
  const x = 7;
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: '#000' }}>{props.mnumber}</p>
        <button onClick={() => props.plsadd(730)}>button 1</button>
        <button onClick={() => props.plsadd(900)}>button 2</button>
        <p onClick={() => props.sayhi(x)}>hello boy{props.number}</p>
      </header>
      <Home />
    </div>
  );
}

const mapStateToProps = state => {
  return { mnumber: state.mobile, number: state.name };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      plsadd,
      sayhi
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
