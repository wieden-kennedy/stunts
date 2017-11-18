import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import 'modernizr';
import Application from './components/application';
import application from './stores/application';

ReactDOM.render(
    <AppContainer>
        <Application application={application}/>
    </AppContainer>,
    document.getElementById('application')
);

if (module.hot) {
    module.hot.accept('./components/application', () => {
        const NextApplication = require('./components/application').default;
        ReactDOM.render(
            <NextApplication>
                <Application application={application}/>
            </NextApplication>,
            document.getElementById('application')
        );
    });
}
