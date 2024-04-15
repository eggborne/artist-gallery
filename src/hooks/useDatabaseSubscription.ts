// src/hooks/useDatabase.ts

import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../firebase-config';

export const useDatabaseSubscription = (path: string, initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, path);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>> useDatabaseSubscription value changed!')
      setValue(snapshot.val());
      setLoading(false);
    });
    return () => {
      off(dbRef);
      unsubscribe();
    };
  }, [path]);

  return [value, loading];
};