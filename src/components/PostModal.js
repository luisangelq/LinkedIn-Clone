import { useState } from "react";
import styled from "styled-components";
import Dropzone, { useDropzone } from "react-dropzone";

import { connect } from "react-redux";
import firebase from "firebase";
import { postArticle } from "../actions";

const PostModal = (props) => {
  const [text, setText] = useState("");
  const [showDropzone, setShowDropzone] = useState(false);
  const [screenFileType, setScreenFileType] = useState("");
  const [shareFile, setShareFile] = useState("");

  const { user, setShowModal } = props;

  const handlePost = (e) => {
    e.preventDefault();

    if (e.target != e.currentTarget) return;

    const payload = {
      file: shareFile,
      user: user,
      description: text,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.handlePost(payload)

    setShowModal(false);
  };

  const handleFile = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file === "" || file === undefined) {
      alert("There's no file");
      return;
    }

    //Check for image type
    if (
      (file.type == "image/png" && screenFileType == "image") ||
      (file.type == "image/jpeg" && screenFileType == "image") ||
      (file.type == "image/gif" && screenFileType == "image")
    ) {
      setShareFile(file);
      setShowDropzone(true);

      return;
    }

    //Check for video type
    if (file.type == "video/mp4" && screenFileType == "video") {
      setShareFile(file);
      setShowDropzone(true);

      return;
    }

    alert(`This section only accepts ${screenFileType}s `);
    return;
  };

  const selectResource = (file) => {
    //Check for image type
    if (
      file.type == "image/png" ||
      file.type == "image/jpeg" ||
      file.type == "image/gif"
    ) {
      return <img src={URL.createObjectURL(shareFile)} />;
    }

    //Check for video type
    if (file.type == "video/mp4") {
      return (
        <video
          controls
          src={URL.createObjectURL(shareFile)}
          type={shareFile.type}
        />
      );
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,
  });

  return (
    <Container onMouseDown={() => setShowModal(false)}>
      <Content
        onMouseDown={(e) => e.stopPropagation()}
      >
        <Header>
          <h3>
            {isDragActive || showDropzone ? "Edit your file" : "Create post"}
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
                    {shareFile ? (
                      selectResource(shareFile)
                    ) : (
                      <DropImage>
                        <button>
                          <input {...getInputProps()} />
                          Select {screenFileType}s to share
                        </button>
                      </DropImage>
                    )}
                  </ImagePreview>

                  <DropButtons>
                    <button
                      className="back"
                      onClick={() => {
                        setShowDropzone(false);
                        setShareFile("");
                      }}
                    >
                      Back
                    </button>

                    <button
                      className={shareFile ? "enabled" : "disabled"}
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
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="User" />
                  ) : (
                    <img src="/images/modal/user.svg" alt="User" />
                  )}

                  <div>
                    <span className="name">{user?.displayName}</span>
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

                  {shareFile && (
                    <ImagePost>
                      <button onClick={() => setShareFile("")}>x</button>
                      {selectResource(shareFile)}
                    </ImagePost>
                  )}
                </WritePost>
              </Body>
              <Hashtag onClick={() => setText(text + " #")}>
                Add hashtag
              </Hashtag>
              <Footer>
                <LeftButtons>
                  <button
                    onClick={() => {
                      setShowDropzone(true);
                      setShareFile("");
                      setScreenFileType("image");
                    }}
                  >
                    <div>
                      <img
                        src="/images/modal/photoModal-icon.svg"
                        alt="Photo"
                      />
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setShowDropzone(true);
                      setShareFile("");
                      setScreenFileType("video");
                    }}
                  >
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
                    className={text || shareFile ? "enabled" : "disabled"}
                    onClick={(e) => handlePost(e)}
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

  video,
  img {
    width: 100%;
    height: 100%;
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

  video,
  img {
    width: 70%;
    margin: 2rem auto;
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

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handlePost: (payload) => dispatch(postArticle(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
