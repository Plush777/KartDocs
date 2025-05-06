import { getStorage } from 'firebase/storage';
import { firebasedb } from './firebasedb';

const storage = getStorage(firebasedb);
export default storage;
