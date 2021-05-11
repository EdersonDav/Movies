import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import Search from '../Search';
import { HeaderWrapper, HeaderTitle, HeaderNav, Container } from './style';

const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <Container>
      <HeaderWrapper>
        <HeaderTitle>
          <h1>SUNO</h1>
          <span>MOVIES</span>
        </HeaderTitle>
        <HeaderNav openSearch={openSearch}>
          <ul>
            <li>
              <Link to="/">INÍCIO</Link>
            </li>
            <li>
              <Link to="/">CATÁLOGO</Link>
            </li>
            <li>
              <button type="button" onClick={() => setOpenSearch(!openSearch)}>
                <CgSearch />
              </button>
            </li>
          </ul>
        </HeaderNav>
      </HeaderWrapper>
      {openSearch && <Search />}
    </Container>
  );
};

export default Header;
