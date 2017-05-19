import { firebaseAuth } from 'config/firebase';

export default loggedIn =>
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            loggedIn = true;
        } else {
            // No user is signed in.
            loggedIn = false;
        }
    });
