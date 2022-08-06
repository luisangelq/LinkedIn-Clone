import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="LinkedIn" />
        </a>

        <div>
          <Join>Join</Join>

          <SignIn>Sign In</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your prodessional comunity </h1>
        </Hero>
      </Section>



    </Container>
  );
};

const Container = styled.div``;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  max-width: 1128px;
  margin: auto;
  padding: 1rem 0;

  & > a {
    width: 135px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding: 40px 0 138px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    text-align: start;
    line-height: 70px;
  }
`
export default Login;
