import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import NavBar from '../NavBar';
import Layout from '../Layout';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import GlobalContext from '../../state/GlobalContext';
import GlobalReducer from '../../state/GlobalReducer';
import Private from '../Private';

export default function App() {
  const [videos, setVideos] = React.useState([]);
  const [state, dispatch] = useReducer(GlobalReducer, {
    word: 'Wizeline',
    theme: {
      navBar: '#3fc7cb',
      content: 'white',
      text: 'black',
    },
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalContext.Provider value={{ state, dispatch }}>
          <NavBar setVideos={setVideos} />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage videos={videos} />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route exact path="/video/:id">
                <VideoDetailPage />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </GlobalContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}
