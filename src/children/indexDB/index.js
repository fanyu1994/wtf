import db from './createIndexDB'

db({ dbName: 'test-db-1', dbVersion: 2 })
  .then(e => {
    let objectStore;
    if (!db.objectStoreNames.contains('person')) {
      objectStore = db.createObjectStore('person', { keyPath: 'id' });
    }
  })
  .catch(error => console.log('error: ', error))