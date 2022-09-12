import styled from "styled-components";
import React from "react";

import { ArticleContainer, Footer } from "./Main";

const Article = ({ article }) => {
  const { actor, comments, description, imageUrl, videoUrl } = article;

  return (
    <ArticleContainer>
      <Head>
        <img src={actor.image} alt="User" />

        <div>
          <span className="name">{actor.title}</span>
          {/* <span className="slogan">-</span> */}
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
        <p>{description}</p>

        {imageUrl && <img src={imageUrl} alt="Article Image" />}
        {videoUrl && <video controls src={videoUrl} alt="Article Video" />}

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
    </ArticleContainer>
  );
};

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

  img, video {
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
    margin-left: 0.4rem;
  }
`;

export default Article;
