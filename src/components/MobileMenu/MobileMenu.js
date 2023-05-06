/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close'/>
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>
        <Spacer/>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background: ${COLORS.white};

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
`;


const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 0px;
  padding: 16px;
  background: none;
  border: none;
  color: ${COLORS.gray[900]}
`;

const Spacer = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-left: 12vw;
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${18 / 16}rem;
`;

const Footer = styled.footer`
  flex: 1;
  padding-left: 12vw;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${COLORS.gray[700]};
  font-weight: 500;
  font-size: ${14 / 16}rem;
`;

export default MobileMenu;
