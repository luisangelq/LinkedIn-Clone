import { useEffect, useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";

import { connect } from "react-redux";
import { getArticles } from "../actions";
import Article from "./Article";

const Main = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.handleGetArticles();
  }, []);

  return (
    <Container>
      <CommonCard>
        <SharePost>
        
          <img src={props?.user?.photoURL} alt="Post" />
          <button onClick={() => setShowModal(true)}>Start a post</button>
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

      {props.articles.length > 0 &&
        props.articles.map((article, key) => (
          <Article key={key} article={article} />
        ))}

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

export const ArticleContainer = styled(CommonCard)`
  padding: 0;
  margin-bottom: 0.5rem;
`;

export const Footer = styled(ActionsPost)`
  margin: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleGetArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
