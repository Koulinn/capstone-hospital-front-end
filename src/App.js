import { Route, BrowserRouter as Router } from 'react-router-dom';
import Chat from './views/Chat/Chat';

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
