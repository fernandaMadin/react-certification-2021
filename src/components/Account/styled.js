import styled from 'styled-components';

const AccountIcon = styled.img`
  color: white;
  width: 50px;
  height: 50px;
  float: right;
  margin-left: 30px;
`;

const Dropdown = styled.ul`
  position: absolute;
  display: ${({ openDrop }) => (openDrop ? 'block' : 'none')};
  padding-inline-start: 0px;
  background-color: lightgray;
  padding: 8px;
  margin-top: 40px;
`;

const Button = styled.button`
  box-sizing: inherit;
  background-color: transparent;
  font-size: 19px;
  color: white;
  font-weight: bold;
  border: none;
`;

export { AccountIcon, Dropdown, Button };
