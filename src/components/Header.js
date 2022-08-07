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
          <NavListWrap>
            <NavList>
              <a href="">
                <img src="/images/nav-home.svg" alt="Notification" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-network.svg" alt="Notification" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-jobs.svg" alt="Notification" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-messaging.svg" alt="Notification" />
                <span>Messages</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-notifications.svg" alt="Notification" />
                <span>Notifications</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-notifications.svg" alt="Notification" />
                <span>Home</span>
              </a>
            </NavList>
          </NavListWrap>
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
  width: 500px;
  background-color: #eef3f8;
  border-radius: 4px;
  padding: 0.5rem 0;
  margin: 0 6rem 0 1rem;

  input {
    width: 100%;
  }
  img {
    margin-left: 1rem;
    opacity: 0.6;
    margin: 0 0.5rem 0 1rem;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  width: 100%;


  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    margin: 0 auto;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
  

  @media (max-width: 768px) {
    
    margin: .5rem 0;
    gap: .5rem;

  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;
    color: black;
    opacity: .6;
    transition: all 0.2s ease-in-out; 
    white-space: nowrap;

    &:hover {
      opacity: 1;
    }

  }
`;

export default Header;
