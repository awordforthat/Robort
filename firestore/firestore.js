import FirestoreConnection from "./firestoreConnection.js";

//TODO: move to environment file
const firebaseConfig = {
  apiKey: "AIzaSyAIFfbuNCBl8Cr-8Y7Ur0TCh4foMnF-pqA",
  authDomain: "robort-demo.firebaseapp.com",
  projectId: "robort-demo",
  storageBucket: "robort-demo.firebasestorage.app",
  messagingSenderId: "125478266135",
  appId: "1:125478266135:web:e74fc8ef40adc41d360352",
};

const firestoreConnection = new FirestoreConnection();
firestoreConnection.initialize(firebaseConfig);

function onNewScoutingData(results) {
  let resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = results.map((r) => {
    return `<tr>
    <td>${r.teamName}</td>
    <td>${r.canClimb}</td>
    <td>${r.canScoreL0}</td>
    <td>${r.canScoreL1}</td>
    <td>${r.canScoreL2}</td>
    <td>${r.canScoreL3}</td>
    </tr>`;
  });
}
firestoreConnection.pollCollection("scouting-data", onNewScoutingData);
