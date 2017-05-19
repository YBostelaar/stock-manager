/* eslint 'global-require': 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'app/store';
import { initAuth } from 'services/initAuth';

const render = () => {
    const Root = require('app/components/Root').default;
    ReactDOM.render(<Root />, document.getElementById('app'));
};

initAuth(store.dispatch).then(() => render());

if (__DEV__ && module.hot) {
    module.hot.accept('./app/components/Root', render);
}
