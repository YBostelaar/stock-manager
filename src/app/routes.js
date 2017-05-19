import App from 'app/components/App';
import { Login, Register, Dashboard } from 'app/components/modules';

export default [
    {
        component: App,
        childRoutes: [
            {
                component: Dashboard,
                path: '/',
            },
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
];
