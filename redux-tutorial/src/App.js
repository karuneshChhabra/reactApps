import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/HomeContainer';
import HeaderContainer from './container/HeaderContainer';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
     
    </div>
  );
}

export default App;
