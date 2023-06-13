import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings, UserProfile } from '../pages';
import { Loader, Navbar } from './';

const PrivateRoute = () => {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  console.log('auth', auth);
  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/register" element={<Signup />} />

          <Route exact path="/settings" element={<PrivateRoute />}>
            <Route exact path="/settings" element={<Settings />} />
          </Route>

          <Route exact path="/user/:userId" element={<PrivateRoute />}>
            <Route exact path="/user/:userId" element={<UserProfile />} />
          </Route>

          <Route element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
