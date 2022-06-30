import Dexie from 'dexie';

export const db = new Dexie('CboardLocal');
db.version(1).stores({
  images: '&id,name, file' // Primary key and indexed props
});

//export const saveImage = (image) => db.images.add(image);
