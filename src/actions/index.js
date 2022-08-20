import { auth, provider } from "../firebase";

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
    auth.onAuthStateChanged(async(user) => {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "CLEAR_USER" });
      }
    });
  };
}

const signOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: "CLEAR_USER" });
      }).catch((error) => {
        console.log(error);
      }
    );
  }
}

export { signIn, getUserAuth, signOut };
