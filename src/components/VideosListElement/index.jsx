import React, { useContext } from 'react';
import { ListElement, Image, Detail, Description } from './styled';
import GlobalContext from '../../state/GlobalContext';

const VideosListElement = ({ snippet }) => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <ListElement>
      <Image img={snippet.thumbnails.medium.url} />
      <Detail>
        <Description theme={theme}>{snippet.title}</Description>
      </Detail>
    </ListElement>
  );
};

export default VideosListElement;
