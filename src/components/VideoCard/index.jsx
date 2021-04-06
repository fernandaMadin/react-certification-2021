import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardContent, CardTitle, CardDescription } from './styled';
import GlobalContext from '../../state/GlobalContext';

const VideoCard = ({ video, videos }) => {
  const { snippet, id } = video;
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <Link to={{ pathname: `/video/${id.videoId}`, state: { video, videos } }}>
      <Card data-testid="card">
        <CardImg img={snippet.thumbnails.medium.url} />
        <CardContent>
          <CardTitle theme={theme}>{snippet.title}</CardTitle>
          <CardDescription theme={theme}>{snippet.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
