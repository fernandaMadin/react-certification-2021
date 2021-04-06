import React, { useContext } from 'react';
import SideMenu from '../SideMenu';
import SearchInput from '../SearchInput';
import Account from '../Account';
import {
  Nav,
  NavContent,
  MenuIcon,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  NavElementsWrapper,
} from './styled';
import { fetchVideos } from '../../lib/youTubeApi';
import GlobalContext from '../../state/GlobalContext';

const Navbar = ({ setVideos }) => {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(GlobalContext);
  const { theme } = state;

  React.useEffect(() => {
    fetchVideos(state.word).then((videosData) => {
      setVideos(videosData.items);
    });
  }, [state.word]);

  const changeHandler = () => {
    setChecked(!checked);
    if (!checked) {
      dispatch({
        type: 'SET_THEME',
        payload: {
          theme: {
            navBar: '#556cd6',
            content: '#303030',
            text: 'white',
          },
        },
      });
    } else {
      dispatch({
        type: 'SET_THEME',
        payload: {
          theme: {
            navBar: '#3fc7cb',
            content: 'white',
            text: 'black',
          },
        },
      });
    }
  };

  return (
    <Nav data-testid="navBar">
      <NavContent theme={theme} data-testid="navContent">
        <div>
          <MenuIcon open={open} onClick={() => setOpen(!open)} />
        </div>
        <SideMenu open={open} setOpen={setOpen} />
        <SearchInput />
        <NavElementsWrapper className="nav-links">
          <CheckBoxWrapper>
            <CheckBox
              id="checkbox"
              type="checkbox"
              checked={checked}
              onChange={changeHandler}
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
          <Account />
        </NavElementsWrapper>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
