// Import the functions you need from the SDKs you need
var admin = require("firebase-admin");

var serviceAccount = require('./devbuiler-firebase-adminsdk-qned7-010f112372.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});