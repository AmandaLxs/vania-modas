const firebaseConfig = {
apiKey: "SUA_CHAVE",
authDomain: "SEU_DOMINIO",
projectId: "SEU_PROJETO"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
