import React, { useContext } from 'react';
import VideoCard from '../VideoCard';
import { Grid, Row, Col } from './styled';
import GlobalContext from '../../state/GlobalContext';

const VideoGrid = ({ videos }) => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <Grid theme={theme} data-testid="grid">
      <Row data-testid="row">
        {videos.map((video) =>
          video.id.videoId ? (
            <Col key={video.id.videoId}>
              <VideoCard video={video} videos={videos} />
            </Col>
          ) : (
            ''
          )
        )}
      </Row>
    </Grid>
  );
};

export default VideoGrid;
