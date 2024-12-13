import { BrowserRouter as Router } from 'react-router-dom';

import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <Router basename="/nexus-app">
      <AuthRoute />
    </Router>
  );
}

export default App;
