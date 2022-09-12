import Swal from "sweetalert2";
import { auth, provider, storage, db } from "../firebase";

const setLoading = (status) => ({
  type: "SET_LOADING",
  status: status,
});

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

  const alert = (type, message) => {
    Swal.fire({
      position: "top",
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  console.log(payload);
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.file.file) {
      storage
        .ref(`images/${payload.file.file.name}`)
        .put(payload.file.file)
        .then(async (snapshot) => {
          const downloadURL = await snapshot.ref.getDownloadURL();

          if(payload.file.type === "image"){
            data.imageUrl = downloadURL;
          }

          if(payload.file.type === "video") {
            data.videoUrl = downloadURL;
          }

          await db.collection("articles").add(data);

          dispatch(setLoading(false));
          alert("success", "Post uploaded");
        })
        .catch((error) => {
          console.log(error);
          alert("error", error);
        });
    } else {
      try {
        db.collection("articles").add(data);

        dispatch(setLoading(false));
        alert("success", "Post uploaded");
      } catch (error) {
        console.log(error);
        alert("error", error);
      }
    }
  };
};

const getArticles = () => {
  return (dispatch) => {
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        const articles = snapshot.docs.map((doc) => doc.data());

        dispatch({
          type: "GET_ARTICLES",
          payload: articles,
        });
      });
  };
};

export { signIn, getUserAuth, signOut, postArticle, getArticles };
