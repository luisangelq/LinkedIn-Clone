import styled from "styled-components";

const PostModal = ({ setShowModal }) => {
  return (
    <Container onClick={() => setShowModal(false)}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>Create a post</h3>
          <img src="/images/modal/close-icon.svg" alt="Close" />
        </Header>

        <Body></Body>

        <Footer></Footer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 90%;
  max-width: 550px;
  height: 370px;
  border-radius: 0.5rem;
`;

const Header = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;

export default PostModal;
