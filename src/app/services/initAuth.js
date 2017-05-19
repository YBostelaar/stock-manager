import { firebaseAuth } from 'config/firebase';
import { loginSuccess } from 'ducks/user';

export function initAuth(dispatch) {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(
            (authUser) => {
                if (authUser) dispatch(loginSuccess(authUser));
                resolve();
                unsubscribe();
            },
            error => reject(error),
        );
    });
}
