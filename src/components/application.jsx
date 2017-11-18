import React from 'react';
import {observer} from 'mobx-react';
import app from '../controllers/application';
import {name, version} from '../../package.json';
import './styles/application.scss';

@observer
class Application extends React.Component {
    componentDidMount() {
        app.loading(false);
    }

    render() {
        const {application} = this.props;
        return (
            <div id="application-component">
                <h1>{name} v{version}</h1>
                <p>Loading: {`${application.loading}`}</p>
            </div>
        );
    }
}

export default Application;
