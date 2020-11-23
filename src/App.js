import './App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom'
// import Auth from './Components/Auth/Auth'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Form from './Components/Form/Form'
// import Post from './Components/Post/Post'
import Nav from './Components/Nav/Nav'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ? null : <Nav/>} 
      {/*//-{props.location.pathname !== '/' && <Nav/> */}
      {routes}
    </div>
  );
}

export default withRouter(App);
