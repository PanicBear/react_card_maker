import { getDatabase, onValue, ref } from "firebase/database";
import Firebase from "../firebase";

class DB {
  constructor() {
    this.db = getDatabase(Firebase);
  }
  getDatabase = () => {
    return this.db;
  };
  // C = (input) => {
  //   const ref = null;
  //   const value = {...input};
  //   return set(ref,value)
  // }
  R = (index) => {
    const testRef = ref(this.db, `card/${index}`);
    onValue(testRef, (snapshot)=>{
      console.log(snapshot.val());
    })
  };
  U = () => {};
  D = () => {};
}
export default DB;
