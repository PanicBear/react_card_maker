import {
  getDatabase,
  onValue,
  set,
  ref,
  push,
  remove,
} from "firebase/database";
import Firebase from "../firebase";

class DB {
  constructor() {
    this.db = getDatabase(Firebase);
  }
  getDatabase = () => this.db;

  C = (uid, value) => {
    const cardListRef = ref(this.db, `card/${uid}`);
    const pushCardRef = push(cardListRef);
    return set(pushCardRef, value);
  };
  R = (uid, setData) => {
    const cardListRef = ref(this.db, `card/${uid}`);
    onValue(cardListRef, (snapshot) => {
      setData(snapshot.val());
    });
  };
  U = (uid, value, id) => {
    const cardListRef = ref(this.db, `card/${uid}/${id}`);
    return set(cardListRef, value);
  };
  D = (uid, id) => {
    const cardListRef = ref(this.db, `card/${uid}/${id}`);
    return remove(cardListRef);
  };
}
export default DB;
