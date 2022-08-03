import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="LinkedIn" />
        </a>
      </Nav>
    </Container>
  );
};

const Container = styled.div`

`;
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    position: relative;
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;

    & > a {
        width: 135px ;

        @media (max-width: 768px) {
            padding: 0 5px;
            
        }
    }

`;

export default Login;
