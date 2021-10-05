import {
  getAuth,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import Firebase from "../firebase";

class Auth {
  constructor() {
    this.auth = getAuth(Firebase);
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
  }
  setCredential = (provider) => {
    switch (provider) {
      case "github":
        this.provider = this.githubAuth;
        break;
      case "google":
        this.provider = this.googleAuth;
        break;
      default:
        new Error("unknown provider");
    }
    return signInWithRedirect(this.auth, this.provider);
  };
  checkCredential = (history) => {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        history.push("/main");
      } else {
        history.push("/login");
      }
    });
  };
  getCurrentUser = () => {
    return this.auth.currentUser;
  };
  // getCredential = () => getRedirectResult(this.auth);
  resetCredential = () => {
    signOut(this.auth);
  };
}
export default Auth;
