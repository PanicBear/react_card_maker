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
  R = (setData, uid) => {
    const testRef = ref(this.db, `card/${uid}`);
    onValue(testRef, (snapshot) => {
      setData(snapshot.val());
    });
  };
  U = () => {};
  D = () => {};
}
export default DB;
