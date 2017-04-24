import firebaseDb from 'firebaseConfig';


//works
const yok = firebaseDb.ref('chelovek');
yok.push({
  look:'skywalker'
});
