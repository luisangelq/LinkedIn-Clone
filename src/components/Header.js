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
            <NavList className="active">
              <a href="/#">
                <img src="/images/nav-home.svg" alt="Notification" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/#">
                <img src="/images/nav-network.svg" alt="Notification" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/#">
                <img src="/images/nav-jobs.svg" alt="Notification" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/#">
                <img src="/images/nav-messaging.svg" alt="Notification" />
                <span>Messages</span>
              </a>
            </NavList>
            <NavList>
              <a href="/#">
                <img src="/images/nav-notifications.svg" alt="Notification" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              
              <a href="#">
                <img src="/images/user.svg" alt="UserIcon" />
                <div>
                  <span>Me</span>
                  <img src="/images/down-icon.svg" alt="DownArrow" />
                </div>
              </a>

              <SignOut>
                <a href="/#">Sign Out</a>
              </SignOut>
            </User>

            <Work>
              
              <a href="/#">
                <img src="/images/nav-work.svg" alt="WorkIcon" />
                <div>
                  <span>Work</span>
                  <img src="/images/down-icon.svg" alt="DownArrow" />
                </div>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 .5rem;
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
  max-width: 1128px;
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
  margin: 0 1rem;

  input {
    width: 100%;
  }
  img {
    margin-left: 1rem;
    opacity: 0.6;
    margin: 0 0.5rem 0 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 3rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 300px) {
    overflow-x: scroll;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
  @media (max-width: 300px) {
    margin-right: -4rem;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -8px;
  width: 80px;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 2px solid black;
    a {
      opacity: 1;
    }
  }

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
    opacity: 0.6;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    transform: scale(0.8);
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 5px;
  padding: 1rem;
  width: 80px;
  display: none;

  a {
  font-size: 14px;
  }

  @media (max-width: 768px) {
    top: -50px;
  }
`;


const User = styled(NavList)`
  a > img {
    width: 24px;
    border-radius: 50%;
  }

  a > div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  &:hover {
    ${SignOut} {
      display: block;
    }
  }
`;

const Work = styled(User)`
  padding-left: 0.4rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;


export default Header;
