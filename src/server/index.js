import store from 'app/store';
import getRoutes from 'app/routes';
import express from 'express';
import React from 'react';
import path from 'path';
import { port } from 'config';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import renderFullPage from 'server/helpers/renderFullPage';
import compress from 'compression';

const app = express();
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(compress());

app.use((req, res, next) => {
    const routes = getRoutes();
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            return next(error);
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (!renderProps) {
            return res.status(404).send('Not found');
        }

        res.status(200).send(renderFullPage(renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>,
        )));
    });
});

app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});
