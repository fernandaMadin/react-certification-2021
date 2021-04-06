import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import VideosList from '../../components/VideosList';
import {
  Player,
  VideoDetail,
  VideoInfo,
  List,
  VideoDescription,
  AddFavorites,
} from './styled';
import GlobalContext from '../../state/GlobalContext';

function VideoDetailPage() {
  const isLogged = storage.get(AUTH_STORAGE_KEY);
  const history = useHistory();
  const [video, setVideo] = React.useState(history.location.state.video);
  const [vids, setVideos] = React.useState(history.location.state.videos);
  const [favorite, setFavorite] = React.useState(false);
  const { snippet, id } = video;
  const { state } = useContext(GlobalContext);
  const { theme } = state;
  let favoritesList = storage.get('favoriteList');

  const addToFavorites = () => {
    if (favoritesList === null) {
      favoritesList = [];
    }
    const index = favoritesList.findIndex(
      (element) => element.id.videoId === video.id.videoId
    );
    if (index === -1) {
      favoritesList.push(video);
    }
    storage.set('favoriteList', favoritesList);
    setFavorite(true);
  };

  const removeFromFavorites = () => {
    const index = favoritesList.findIndex(
      (element) => element.id.videoId === video.id.videoId
    );
    if (index !== -1) {
      favoritesList.splice(index, 1);
      storage.set('favoriteList', favoritesList);
    }
    setFavorite(false);
  };

  const addFavorites = (
    <AddFavorites
      theme={theme}
      onClick={() => {
        addToFavorites();
      }}
    >
      AGREGAR A FAVORITOS
    </AddFavorites>
  );

  const removeFavorites = (
    <AddFavorites
      theme={theme}
      onClick={() => {
        removeFromFavorites();
      }}
    >
      REMOVER DE FAVORITOS
    </AddFavorites>
  );

  const isFavorite = () => {
    if (favoritesList !== null) {
      const index = favoritesList.findIndex(
        (element) => element.id.videoId === video.id.videoId
      );
      if (index !== -1) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    } else {
      setFavorite(false);
    }
  };

  const show = () => {
    if (favorite) {
      return removeFavorites;
    }
    return addFavorites;
  };

  React.useEffect(() => {
    setVideo(video);
    isFavorite();
  }, [video]);

  return (
    <VideoDetail theme={theme}>
      <Player>
        <ReactPlayer
          width="100%"
          height="80%"
          url={`https://www.youtube.com/embed/${id.videoId}`}
        />
        <VideoInfo>
          <VideoDescription theme={theme}>
            <h2>{snippet.title}</h2>
            <p>{snippet.description}</p>
          </VideoDescription>
          {isLogged ? show() : ''}
        </VideoInfo>
      </Player>
      <List>
        <VideosList videos={vids} setVideo={setVideo} setVideos={setVideos} />
      </List>
    </VideoDetail>
  );
}

export default VideoDetailPage;
