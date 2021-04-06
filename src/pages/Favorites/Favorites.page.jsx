import React, { useContext } from 'react';
import { storage } from '../../utils/storage';
import VideoGrid from '../../components/VideoGrid';
import { Favorites } from './styled';
import GlobalContext from '../../state/GlobalContext';

function FavoritesPage() {
  const { state } = useContext(GlobalContext);
  const { theme } = state;
  const videos = storage.get('favoriteList');

  return (
    <section>
      <Favorites theme={theme}>Favorites</Favorites>
      <VideoGrid videos={videos} />
    </section>
  );
}

export default FavoritesPage;
