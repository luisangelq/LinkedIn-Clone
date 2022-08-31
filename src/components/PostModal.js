import { useState } from "react";
import styled from "styled-components";
import Dropzone, { useDropzone } from "react-dropzone";


const PostModal = ({ setShowModal }) => {
  const [text, setText] = useState("");
  const [showDropzone, setShowDropzone] = useState(false);
  const [shareImage, setShareImage] = useState("");

  const handleFile = (acceptedFiles) => {
    const image = acceptedFiles[0];

    console.log(image.type);
    if (image === "" || image === undefined) {
      alert("There's no image");
      return;
    }

    if (
      image.type == "image/png" ||
      image.type == "image/jpeg" ||
      image.type == "image/gif"
    ) {
      setShareImage(image);
      setShowDropzone(true);

      return;
    } else {
      const getExtension = image.type.split("/");

      console.log(getExtension);
      alert(`Not an image, the file is a ${getExtension[1]}`);
      return;
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,
  });

  return (
    <Container onMouseDown={() => setShowModal(false)}>
      <Content
        onMouseDown={(e) => e.stopPropagation()}
        // on={(e) => e.preventDefault()}
      >
        <Header>
          <h3>
            {isDragActive || showDropzone ? "Edit your photo" : "Create post"}
          </h3>
          <button onClick={() => setShowModal(false)}>
            <img src="/images/modal/close-icon.svg" alt="Close" />
          </button>
        </Header>

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive || showDropzone ? (
            <Dropzone onDrop={(acceptedFiles) => handleFile(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <>
                  <ImagePreview {...getRootProps()}>
                    {shareImage ? (
                      <img src={URL.createObjectURL(shareImage)} />
                    ) : (
                      <DropImage>
                        <button>
                          <input {...getInputProps()} />
                          Select images to share
                        </button>
                      </DropImage>
                    )}
                  </ImagePreview>

                  <DropButtons>
                    <button
                      className="back"
                      onClick={() => {
                        setShowDropzone(false);
                        setShareImage("");
                      }}
                    >
                      Back
                    </button>

                    <button
                      className={shareImage ? "enabled" : "disabled"}
                      onClick={() => setShowDropzone(false)}
                    >
                      Done
                    </button>
                  </DropButtons>
                </>
              )}
            </Dropzone>
          ) : (
            <>
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
                  <textarea
                    placeholder="What do you want to talk about?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />

                  {shareImage && (
                    <ImagePost>
                      <button onClick={() => setShareImage("")}>x</button>
                      <img src={URL.createObjectURL(shareImage)} />
                    </ImagePost>
                  )}
                </WritePost>
              </Body>
              <Hashtag onClick={() => setText(text + " #")}>
                Add hashtag
              </Hashtag>
              <Footer>
                <LeftButtons>
                  <button onClick={() => setShowDropzone(true)}>
                    <div>
                      <img
                        src="/images/modal/photoModal-icon.svg"
                        alt="Photo"
                      />
                    </div>
                  </button>

                  <button onClick={() => setShowDropzone(true)}>
                    <img src="/images/modal/videoModal-icon.svg" alt="Photo" />
                  </button>
                  <button>
                    <img
                      src="/images/modal/documentModal-icon.svg"
                      alt="Photo"
                    />
                  </button>
                  <button>
                    <img src="/images/modal/jobModal-icon.svg" alt="Photo" />
                  </button>
                  <button>
                    <img
                      src="/images/modal/celebrateModal-icon.svg"
                      alt="Photo"
                    />
                  </button>
                  <button>
                    <img src="/images/modal/graphPost-icon.svg" alt="Photo" />
                  </button>
                  <button>
                    <img src="/images/modal/dotsCard-icon.svg" alt="Photo" />
                  </button>
                </LeftButtons>

                <RightButtons>
                  <button>
                    <img src="/images/modal/commentCard-icon.svg" alt="Photo" />
                    Anyone
                  </button>
                  <button
                    className={text || shareImage ? "enabled" : "disabled"}
                    onClick={() => {
                      if (text || shareImage) {
                        setShowModal(false);
                      }
                    }}
                  >
                    Post
                  </button>
                </RightButtons>
              </Footer>
            </>
          )}
        </div>
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
  background-color: rgba(0, 0, 0, 0.75);
  animation: fadeIn 0.3s;
`;

const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  img {
    width: 100%;
  }
`;

const DropImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-size: 16px;
    font-weight: 600;
    color: #0a66c2;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
      background-color: #e2f0fe;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  background-color: #fff;
  width: 90%;
  max-width: 550px;
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
  overflow-y: auto;
  max-height: 500px;
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
    margin-left: 0.5rem;

    span {
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.75);
      margin-bottom: 0.2rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 1rem;
      padding: 0.3rem 0.5rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.5);
      gap: 0.3rem;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const WritePost = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 370px;

  textarea {
    margin: 2rem 0;
    min-height: 150px;
    resize: none;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: rgba(0, 0, 0, 0.8);

    &::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }
  }
`;

const ImagePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  img {
    width: 70%;
    margin: 0 auto;
  }

  button {
    margin: 0.5rem;
    margin-left: auto;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    padding: 0 0.5rem;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const Hashtag = styled.button`
  width: 110px;
  font-size: 15px;
  font-weight: 600;
  color: #0a66c2;
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e2f0fe;
  }
`;

const Footer = styled.div`
  display: flex;
  margin-top: auto;
  padding: 0.5rem 1rem;
  white-space: nowrap;
`;

const LeftButtons = styled.div`
  display: flex;
  padding-right: 1rem;

  button {
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const RightButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  button {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.55);

    border-radius: 2rem;

    img {
      width: 16px;
      height: 16px;
      margin-right: 0.2rem;
    }
  }

  .enabled {
    padding: 0.5rem 1rem;
    font-size: 15px;
    background-color: #0a66c2;
    color: white;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #004182;
    }
  }

  .disabled {
    padding: 0.5rem 1rem;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

const DropButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  border-top: 1px solid #e6e6e6;

  button {
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 2rem;
    font-size: 15px;
  }

  .back {
    color: #0a66c2;
    border: 1px solid #0a66c2;
  }

  .enabled {
    background-color: #0a66c2;
    color: white;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #004182;
    }
  }

  .disabled {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export default PostModal;
