import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "../actions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      {
        props.user && <Navigate to="/home" />
      }
      <Nav>
        <a href="/">
          <img src="/images/login/login-logo.svg" alt="LinkedIn" />
        </a>

        <div>
          <Join>Join</Join>

          <SignIn>Sign In</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional comunity </h1>

          <img src="/images/login/login-hero.svg" alt="Illustration" />
        </Hero>

        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/login/google.svg" alt="Google" />
            <span>Sign in with Google</span>
          </Google>
        </Form>
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
  white-space: nowrap;

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
  transition: all 0.2s ease-in-out;

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
  padding: 40px 0;
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
  display: flex;
  margin-left: 50px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }

  h1 {
    width: 68%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    text-align: start;
    line-height: 70px;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 36px;
      text-align: center;
      line-height: 50px;
    }
  }

  img {
    margin-top: 2rem;
    width: 80%;

    @media (min-width: 769px) {
      width: 700px;
      position: absolute;

      top: 100px;
      right: -250px;
    }
  }
`;

const Form = styled.div`
  margin-top: 110px;
  width: 30%;
  margin-left: 50px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    margin-left: 0;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  border: 2px solid #ebebeb;
  padding: 1rem;
  border-radius: 28px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.8);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
