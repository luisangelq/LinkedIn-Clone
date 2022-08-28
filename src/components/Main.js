import { useState } from "react";
import styled from "styled-components";

import PostModal from "./PostModal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <CommonCard>
        <SharePost>
          <img src="/images/UserPhoto.jpg" alt="Post" />
          <button
            onClick={() => setShowModal(true)}
          >Start a post</button>
        </SharePost>

        <ActionsPost>
          <button>
            <img src="/images/main/photoPost-icon.svg" alt="Photo icon" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/main/videoPost-icon.svg" alt="Video Icon" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/main/eventPost-icon.svg" alt="Event Icon" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/main/articlePost-icon.svg" alt="Article Icon" />
            <span>Write Article</span>
          </button>
        </ActionsPost>
      </CommonCard>

      <FilterCards>
        <hr />

        <p>
          Sort by: <span>Recent</span>
        </p>
        <img src="/images/main/down-icon.svg" alt="Arrow" />
      </FilterCards>

    

      <ShareCards>
        <Head>
          <img src="/images/UserPhoto.jpg" alt="User" />

          <div>
            <span className="name">Luis Angel Quiñones Guerrero</span>
            <span className="slogan">Software technical support</span>
            <span className="date">
              10m •
              <img src="/images/main/worldCard-icon.svg" alt="World icon" />
            </span>
          </div>

          <img
            className="dots"
            src="/images/main/dotsCard-icon.svg"
            alt="Dots icon"
          />
        </Head>

        <Content>
          <p>
            🌎 Responde esta encuesta y se parte de los profesionales que
            aportan un granito de arena para conocer la industria y mejorar las
            condiciones laborales de todos quienes son parte de ella. 👉 Si eres
            de Latam llena la encuesta aquí: https://lnkd.in/evKFDgMS
          </p>

          <img src="/images/main/card.jpg" alt="User" />
        </Content>

        <Reactions>
          <img src="/images/main/smallLikeReact.svg" alt="Like icon" />
          <img src="/images/main/smallLoveReact.svg" alt="Love Icon" />
          <img src="/images/main/smallClapReact.svg" alt="Clap Icon" />

          <span>4</span>
        </Reactions>

        <Footer>
          <button>
            <img src="/images/main/likeCard-icon.svg" alt="Like icon" />
            <span>Like</span>
          </button>

          <button>
            <img src="/images/main/commentCard-icon.svg" alt="Comment Icon" />
            <span>Comment</span>
          </button>

          <button>
            <img src="/images/main/shareCard-icon.svg" alt="Share Icon" />
            <span>Share</span>
          </button>

          <button>
            <img src="/images/main/sendCard-icon.svg" alt="Send Icon" />
            <span>Send</span>
          </button>
        </Footer>
      </ShareCards>

      {showModal && <PostModal setShowModal={setShowModal} />}
    </Container>
  );
};

const Container = styled.div`
  grid-area: Main;
  width: 100%;
`;

const CommonCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  padding: 1rem 1rem 0.4rem 1rem;
`;

const SharePost = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  button {
    width: 100%;
    height: 48px;
    text-align: start;
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.46);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5rem;
    padding: 0.3rem 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`;

const ActionsPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    span {
      font-weight: 600;
      color: rgba(0, 0, 0, 0.5);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
  }
`;

const FilterCards = styled.button`
  display: flex;
  width: 100%;
  white-space: nowrap;
  margin: 0.5rem 0;
  hr {
    width: 100%;
  }
  p {
    display: flex;
    margin: 0 0.5rem;
    gap: 0.2rem;
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;

    span {
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ShareCards = styled(CommonCard)`
  padding: 0;
  margin-bottom: .5rem;
`;

const Head = styled.div`
  display: flex;
  margin: 1rem 0.5rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    gap: 0.2rem;

    .name {
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
    }
    .slogan {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
    .date {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);

      img {
        width: 16px;
        height: 16px;
        margin-left: 0.2rem;
      }
    }
  }

  .dots {
    width: 24px;
    margin-top: -1.5rem;
    margin-left: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    margin: 0 1rem 1rem 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Reactions = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem; 
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;

  img {
    width: 16px;
    height: 16px;
    margin-right: -0.3rem;

  }

  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-left: .4rem;
  }
`

const Footer = styled(ActionsPost)`
  margin: .5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
` ;
export default Main;
