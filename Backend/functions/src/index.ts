import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://goty-f757d.firebaseio.com"
});

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
