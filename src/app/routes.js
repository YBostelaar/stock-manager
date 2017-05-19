import App from 'app/components/App';
import { Login, Register, Dashboard } from 'app/components/modules';
import { browserHistory } from 'react-router';

const requireAuth = store => (nextState) => {
    if (store && !store.getState().user.authenticated) {
        browserHistory.push('/login');
    }
};

const getRoutes = store => (
    [
        {
            component: App,
            path: '/',
            onEnter: requireAuth(store),
            indexRoute: {
                component: Dashboard,
            },
            childRoutes: [
            ],
        },
        {
            component: Login,
            path: '/login',
        },
        {
            component: Register,
            path: '/register',
        },
    ]
);

export default getRoutes;

// export default [
//     {
//         component: App,
//         childRoutes: [
//             {
//                 component: Dashboard,
//                 path: '/',
//             },
//         ],
//     },
//     {
//         component: Login,
//         path: '/login',
//     },
//     {
//         component: Register,
//         path: '/register',
//     },
// ];
