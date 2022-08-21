import styled from "styled-components";

const PostModal = ({ setShowModal }) => {
  return (
    <Container onClick={() => setShowModal(false)}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>Create a post</h3>
          <img src="/images/modal/close-icon.svg" alt="Close" />
        </Header>

        <Body>
          <UserInfo>
            <img src="/images/modal/user.svg" alt="User" />

            <div>
              <span className="name">Luis Angel Quiñones Guerrero</span>
              <button>
                <img src="/images/modal/worldCard-icon.svg" alt="Edit" />
                Anyone
                <img src="/images/modal/down-icon.svg" alt="Arrow" />
              </button>
            </div>
          </UserInfo>

          <WritePost>
            <textarea placeholder="What do you want to talk about?" />

            <button>Add hashtag</button>
          </WritePost>
        </Body>

        <Footer>
          <LeftButtons>
            <button>
              <img src="/images/modal/photoModal-icon.svg" alt="Photo" />
            </button>
            <button>
              <img src="/images/modal/videoModal-icon.svg" alt="Photo" />
            </button>
            <button>
              <img src="/images/modal/documentModal-icon.svg" alt="Photo" />
            </button>
            <button>
              <img src="/images/modal/jobModal-icon.svg" alt="Photo" />
            </button>
            <button>
              <img src="/images/modal/celebrateModal-icon.svg" alt="Photo" />
            </button>
            <button>
              <img src="/images/modal/graphPost-icon.svg" alt="Photo" />
            </button>
          </LeftButtons>

          <RightButtons>
            <button>
              <img src="/images/modal/commentCard-icon.svg" alt="Photo" />
              Anyone
            </button>
            <button>Post</button>
          </RightButtons>
        </Footer>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid #e6e6e6;
  

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #666666;
  }

`;

const Body = styled.div`
  padding: 1rem 1.2rem;
  
`;

const UserInfo = styled.div`
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    span {

    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 1rem;
      padding: .3rem .5rem;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }


`;

const WritePost = styled.div``;

const Footer = styled.div``;

const LeftButtons = styled.div``;

const RightButtons = styled.div``;

export default PostModal;
