import styled from 'styled-components';

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  position: fixed;
`;

const SideMen = styled.div`
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.navBar};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const LinkText = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;
  letter-spacing: 0rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const CloseIcon = styled.p`
  font-size: 40px;
  color: lightgray;
  width: 50px;
  height: 50px;
`;

const CloseBtn = styled.div`
  float: right;
`;

const Links = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export { SideMen, ContainerMenu, LinkText, CloseIcon, CloseBtn, Links };
