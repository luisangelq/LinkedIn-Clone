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

export { signIn };
