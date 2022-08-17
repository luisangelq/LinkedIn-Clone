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
              
            </a>
          </li>
        </FeedList>
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
  padding: 1rem .8rem;
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

const FeedList = styled.ul``;

export default RightSide;
