const functions = require('firebase-functions');
const app = require('../src/app');

// Deploy Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
