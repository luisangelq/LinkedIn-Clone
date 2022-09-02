import styled from "styled-components";

import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

import { connect } from "react-redux";
import { Navigate } from "react-router";

const Home = (props) => {
  return (
    <Container>
      {
        !props.user && <Navigate to="/" />
      }
      <Section>
        <h5>
          <a>Hiring in a Hurry? - .</a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>

      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  max-width: 1128px;
  margin: 0 auto;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 1rem 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "LeftSide Main RightSide";
  grid-template-columns: 1.5fr 3.5fr 2fr;
  gap: 25px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
