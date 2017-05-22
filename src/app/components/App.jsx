import React from 'react';
import PT from 'prop-types';
import { Header, Sidebar } from 'modules';

const App = ({ children }) => (
    <main>
        <Header />
        <Sidebar />
        <section>
            {children}
        </section>
    </main>
);

App.propTypes = {
    children: PT.shape({}),
};

export default App;
