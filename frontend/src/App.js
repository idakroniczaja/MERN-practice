import {Link, Route, Switch} from 'react-router-dom'

import CreateUser from './components/CreateUser';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser'


function App() {
  return (
    <div>
      <nav>
        <Link to='/all-users'>all users</Link>

      </nav>

      <Switch>
        <Route exact path='/all-users' render={(props)=><Users  {...props}/>}/>
        <Route exact path='/new-user' render={(props)=><CreateUser  {...props}/>}/>
        <Route exact path='/all-users/:id/edit' render={(props)=><EditUser  {...props}/>}/>
        <Route exact path='/all-users/:id' render={(props)=><UserDetails  {...props}/>}/>
      </Switch>

    </div>
  );
}

export default App;
