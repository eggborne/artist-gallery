import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase-config';


export const useDatabaseValue = (path: string, initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, path);
    get(dbRef)
      .then((snapshot) => {
        setValue(snapshot.val());
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [path]);

  return [value, loading];
};