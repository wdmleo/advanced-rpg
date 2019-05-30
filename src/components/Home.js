import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Home extends React.Component {
    render() {
        return (
            <div className="main-page">
                <Button type="primary" className="btn-blue">Paramètre</Button>
            </div>
        );
    }
}

export default withRouter(Home);