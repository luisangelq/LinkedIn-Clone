import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo href="/home">
          <img src="/images/home-logo.svg" alt="LinkedIn" />
        </Logo>
        <Search>
            <img src="/images/search-icon.svg" alt="Search" />
            <input type="text" placeholder="Search" />
        </Search>
        <Nav>
            nav
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 8px auto;
  min-height: 100%;
  max-width: 1000px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    background-color: #eef3f8;
    border-radius: 4px;
    padding: .5rem 0;
    margin-left: 1rem;
    
    input {
        width: 100%;
    }
    img {
        margin-left: 1rem;
        opacity: .6;
        margin: 0 .5rem 0 1rem;
    }

    @media (max-width: 480px) {
        width: 200px;
    }

`;

const Nav = styled.nav`
    margin: 0 auto;

    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
    }
`

export default Header;
