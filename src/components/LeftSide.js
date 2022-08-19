import styled from "styled-components";

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <LinkUser>
            <img src="/images/leftSide/photo.svg" alt="UserPhoto" />

            <span>Luis Angel Quiñones Guerrero</span>
          </LinkUser>

          <WorkSlogan>
            <span>Software Technical Support at CONTPAQi</span>
          </WorkSlogan>
        </UserInfo>

        <Widget>
          <div>
            <span>Connections</span>
            <span>Grow your network</span>
          </div>

          <img src="/images/leftSide/connections-icon.svg" alt="Connections" />
        </Widget>

        <Items>
          <a>
            <img src="/images/leftSide/item-icon.svg" alt="Item" />
            <span>My Items</span>
          </a>
        </Items>
      </ArtCard>

      <ComunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>Events</span>
          <img src="/images/leftSide/plus-icon.svg" alt="Event" />
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more..</span>
        </a>
      </ComunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: LeftSide;
  width: 100%;
`;

const ArtCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
`;

const UserInfo = styled.div`
  padding: 0 1rem;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
`;

const CardBackground = styled.div`
  background-image: url("/images/leftSide/card-bg.svg");
  background-position: center;
  background-size: cover;
  height: 56px;
  margin: 0 -1rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const LinkUser = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: relative;
    top: -40px;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
    margin-top: -1.5rem;
    line-height: 1.5;
  }

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

const WorkSlogan = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0.5rem 0 1rem 0;
  line-height: 1.4;
`;

const Widget = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      line-height: 1.333;

      &:first-child {
        color: #666666;
        font-weight: 600;
      }

      &:last-child {
        color: black;
      }
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const Items = styled.div`
  border-top: 1px solid #e6e6e6;
  transition: all 0.2s ease-in-out;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1rem;
    font-size: 12px;
    font-weight: 600;
    color: #666666;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const ComunityCard = styled(ArtCard)`
  margin-top: 0.5rem;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;

  

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    font-size: 12px;
    font-weight: 600;
    color: #666666;

    

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &:last-child {
      border-top: 1px solid #e6e6e6;
      padding: 1rem;
      color: rgba(0, 0, 0, 0.5);
      font-size: 13px;
      justify-content: center;
      
    }
  }

  
`;

export default LeftSide;
