import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';
import routes from './configs/routes';

import AppHeader from './components/AppHeader';
import AuthPage from './pages/AuthPage';
import RegistrationPage from './pages/RegistrationPage';
import NotesPage from './pages/NotesPage';
import SettingPage from './pages/SettingPage';

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  return (
    <>
      <AuthContext.Provider
        value={{ login, logout, token, userId, isAuthenticated }}
      >
        <AppHeader />
        <main>
          {!isAuthenticated && (
            <Switch>
              <Route exact path={routes.AUTH} component={AuthPage} />
              <Route
                exact
                path={routes.REGISTRATION}
                component={RegistrationPage}
              />

              <Redirect to="/" />
            </Switch>
          )}

          {isAuthenticated && (
            <Switch>
              <Route exact path={routes.NOTES} component={NotesPage} />
              <Route exact path={routes.SETTINGS} component={SettingPage} />

              <Redirect to="/notes" />
            </Switch>
          )}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
