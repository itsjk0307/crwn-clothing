import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogle,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firbase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const login = async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
    if (response) {
      console.log(response);
      const userDocRef = createUserDocumentFromAuth(response.user);
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
