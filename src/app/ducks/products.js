import createAction from 'services/createAction';
import { firebaseDatabase } from 'config/firebase';

const PRODUCTS_PENDING = 'PRODUCTS_PENDING';
const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
const PRODUCTS_FAILED = 'PRODUCTS_FAILED';

const initialState = {
    data: null,
    error: false,
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case PRODUCTS_SUCCESS:
        return {
            ...state,
            data: payload,
            loading: false,
        };
    case PRODUCTS_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
        };
    case PRODUCTS_PENDING:
        return {
            ...state,
            loading: true,
            error: false,
        };
    default:
        return state;
    }
};

export const productsSuccess = createAction(PRODUCTS_SUCCESS);
export const productsFailed = createAction(PRODUCTS_FAILED);

export const getProducts = () => (dispatch) => {
    dispatch({ type: PRODUCTS_PENDING });

    firebaseDatabase.ref('/products').once('value').then((res) => {
        console.log(res.val());
        dispatch(productsSuccess(res.val()));
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;

        console.log(errorCode, errorMessage);
    });
};
