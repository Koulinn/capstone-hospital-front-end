import { Route, BrowserRouter as Router } from 'react-router-dom';
import Chat from './views/Chat/Chat';
import Login from './views/Login/Login'

function App() {

  return (
  
        <Router>
          <Route path="/" exact render={(routerProps) =>
            <Chat {...routerProps} />}>
          </Route>
        </Router>
  );
}

export default App;
