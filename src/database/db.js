import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({name: 'UserDatabase.db'});

export default db;
