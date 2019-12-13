import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://goty-f757d.firebaseio.com"
});

const db = admin.firestore();

export const getGames = functions.https.onRequest( async(request, response) => {
    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const game = docsSnap.docs.map(doc => doc.data());
    response.json(game);
});

const app = express();
app.use( cors({ origin: true }));

app.get('/goty', async(req, res) => {
    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const game = docsSnap.docs.map(doc => doc.data());
    res.json(game);
});

app.post('/goty/:id', async(req, res) => {
    const id = req.params.id;
    const gameRef = db.collection('goty').doc(id);
    const gameSnap = await gameRef.get();

    if (!gameSnap.exists) {
        res.status(404).json({
            success: false,
            message: id + ' does not exist'
        });
    } else {
        const data = gameSnap.data() || { votes: 0 };
        await gameRef.update({  votes: data.votes + 1 });

        res.json({
            success: true,
            message: `Thanks for voting for ${data.name}`
        });
    }
});

export const api = functions.https.onRequest(app);