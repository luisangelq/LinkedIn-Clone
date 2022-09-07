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
  const data = {
    actor: {
      description: payload.user.email,
      title: payload.user.displayName,
      date: payload.timestamp,
      image: payload.user.photoURL,
    },
    comments: 0,
    description: payload.description,
  };
  console.log(payload);
  return (dispatch) => {
    if (payload.file != "") {
      storage
        .ref(`images/${payload.file.name}`)
        .put(payload.file)
        .then(async (snapshot) => {
          const downloadURL = await snapshot.ref.getDownloadURL();

          data.sharedFile = downloadURL;

          await db.collection("articles").add(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      try {
        db.collection("articles").add(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export { signIn, getUserAuth, signOut, postArticle };
