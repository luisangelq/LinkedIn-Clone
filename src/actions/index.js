import { auth, provider, storage, db } from "../firebase";

const signIn = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: "SET_USER", payload: result.user });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "CLEAR_USER" });
      }
    });
  };
};

const signOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: "CLEAR_USER" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const postArticle = (payload) => {
  console.log(payload);
  return (dispatch) => {
    if (payload.file != "") {
      storage
        .ref(`images/${payload.file.name}`)
        .put(payload.file)
        .then((snapshot) => {
          const downloadURL = snapshot.ref.getDownloadURL();

          console.log(downloadURL);
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            sharedFile: downloadURL,
            comments: 0,
            description: payload.description,
          });
        });
    }
  };
};

export { signIn, getUserAuth, signOut, postArticle };
