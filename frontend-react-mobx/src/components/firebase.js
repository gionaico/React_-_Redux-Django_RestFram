import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyALE9IKqhLrVNpePEsYJTUolWWFPT3AtZ0",
    authDomain: "django-react-cursos.firebaseapp.com",
    databaseURL: "https://django-react-cursos.firebaseio.com",
    projectId: "django-react-cursos",
    storageBucket: "django-react-cursos.appspot.com",
    messagingSenderId: "320584218024"
};


class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    addQuote(quote) {
        if (!this.auth.currentUser) {
            return alert('Not authorized')
        }

        return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
            quote
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    async getCurrentUserQuote() {
        const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
        return quote.get('quote')
    }
}
export default new Firebase()