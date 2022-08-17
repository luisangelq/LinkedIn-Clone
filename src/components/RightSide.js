import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h3>Add to your feed</h3>
          <img src="/images/feed-icon.svg" alt="Plus" />
        </Title>

        <FeedList>
          <li>
            <a>
              <img src="/images/hash-icon.svg" alt="#" />

              <InfoFeed>
                <span>#LinkedIn</span>
                <button>
                  <img src="/images/plus-icon.svg" alt="Add" />
                  Follow
                </button>
              </InfoFeed>
            </a>
          </li>

          <li>
            <a>
              <img src="/images/hash-icon.svg" alt="#" />

              <InfoFeed>
                <span>#Video</span>
                <button>
                  <img src="/images/plus-icon.svg" alt="Add" />
                  Follow
                </button>
              </InfoFeed>
            </a>
          </li>
          <li>
            <a>
              <img src="/images/hash-icon.svg" alt="#" />

              <InfoFeed>
                <span>#Video</span>
                <button>
                  <img src="/images/plus-icon.svg" alt="Add" />
                  Follow
                </button>
              </InfoFeed>
            </a>
          </li>
        </FeedList>

        <Footer>
          <a>
            <span>View all recommendations</span>
            <img src="/images/right-icon.svg" alt="Arrow" />
          </a>
        </Footer>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: RightSide;
  width: 100%;
`;

const FollowCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  padding: 1rem 0.8rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: rgba(0, 0, 0, 0.65);
  }

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const FeedList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    a {
      display: flex;
      gap: 1rem;

      img {
        width: 48px;
        height: 48px;
      }
    }
  }
`;

const InfoFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    border-radius: 5rem;
    padding: 0.3rem 0.8rem;
    margin: 2px;
    outline: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    img {
      width: 16px !important;
      height: 16px !important;
    }

    &:hover {
      background-color: #ebebeb;
      outline: 2px solid rgba(0, 0, 0, 0.5);
    }
  }
`;

const Footer = styled.div`
  margin-top: 1.5rem;
  padding: .5rem .5rem;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  a {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  font-weight: 600;
  gap: .2rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export default RightSide;
