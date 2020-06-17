import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routing} from './Routing';
import {MainMenu} from "./components/menu/MainMenu";
import {Layout} from 'antd';


const {Header} = Layout;

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Header className="header">
                        <MainMenu/>
                    </Header>
                    <Routing/>
                </Layout>
            </Router>
        </>
    );
}

export default App;
