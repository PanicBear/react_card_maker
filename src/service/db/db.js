import { getDatabase, onValue, set, ref } from "firebase/database";
import Firebase from "../firebase";

class DB {
  constructor() {
    this.db = getDatabase(Firebase);
  }
  getDatabase = () => {
    return this.db;
  };
  C = (uid, value) => {
    set(ref(this.db, `card/${uid}`), value);
  };
  R = (setData) => {
    const testRef = ref(this.db, `card/`);
    onValue(testRef, (snapshot) => {
      setData(snapshot.val());
    });
  };
  U = () => {};
  D = () => {};
}
export default DB;
