import qs from 'qs';
import { browserHistory } from 'react-router';
import { API_ENDPOINT } from 'config/api';

const request = ({ path, options, handle401 }) => new Promise((resolve, reject) => {
    fetch(path, options)
        .then((response) => {
            const unauthorized = response.status === 401 || response.status === 403;
            if (unauthorized && handle401) {
                browserHistory.push('/login');
            }

            if (response.ok) {
                return response.json();
            }

            return Promise.reject(response.statusText);
        })
        .then((json) => {
            console.info('API call succeeded:', json);
            resolve(json);
        })
        .catch((error) => {
            console.error('API call failed:', error);
            reject(error);
        });
});

const generateOptions = ({ method, path, withAuth = true, query, body }) => ({
    path: `${API_ENDPOINT}${path}${query ? '?' : ''}${qs.stringify(query || {})}`,
    options: {
        headers: {
            'Content-Type': 'application/json',
        },
        method,
        ...(body ? { body: JSON.stringify(body) } : {}),
    },
    handle401: withAuth,
});

export const get = ({ path, query, withAuth }) =>
    request(generateOptions({ method: 'GET', path, query, withAuth }));
export const del = ({ path, query, withAuth }) =>
    request(generateOptions({ method: 'DELETE', path, query, withAuth }));
export const post = ({ path, body, withAuth }) =>
    request(generateOptions({ method: 'POST', path, body, withAuth }));
export const put = ({ path, body, withAuth }) =>
    request(generateOptions({ method: 'PUT', path, body, withAuth }));
