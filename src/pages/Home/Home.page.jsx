import React, { useContext } from 'react';
import VideoGrid from '../../components/VideoGrid';
import { Welcome } from './styled';
import GlobalContext from '../../state/GlobalContext';

function HomePage({ videos }) {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <section>
      <Welcome theme={theme}>Welcome</Welcome>
      <VideoGrid videos={videos} />
    </section>
  );
}

export default HomePage;
