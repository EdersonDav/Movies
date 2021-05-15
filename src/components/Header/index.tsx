import { useState } from 'react';
import { CgSearch, CgMenu } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Search from '../Search';
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderNav,
  Container,
  HeaderMobileWrapper,
} from './style';

const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [scrollIn, setScrollIn] = useState('home');
  return (
    <Container>
      <HeaderWrapper>
        <HeaderTitle>
          <h1>SUNO</h1>
          <span>MOVIES</span>
        </HeaderTitle>
        <HeaderNav openSearch={openSearch} scrollIn={scrollIn}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setScrollIn('home');
                  window.scroll(0, 0);
                }}
              >
                INÍCIO
              </Link>
            </li>
            <li>
              <HashLink
                to="/#catalog"
                onClick={() => {
                  setScrollIn('catalog');
                }}
              >
                CATÁLOGO
              </HashLink>
            </li>
            <li>
              <button type="button" onClick={() => setOpenSearch(!openSearch)}>
                <CgSearch />
              </button>
            </li>
          </ul>
        </HeaderNav>
      </HeaderWrapper>
      <HeaderMobileWrapper openSearch={openSearch}>
        <CgMenu size={24} />
        <HeaderTitle>
          <h1>SUNO</h1>
          <span>MOVIES</span>
        </HeaderTitle>

        <button type="button" onClick={() => setOpenSearch(!openSearch)}>
          <CgSearch />
        </button>
      </HeaderMobileWrapper>
      {openSearch && <Search />}
    </Container>
  );
};

export default Header;
