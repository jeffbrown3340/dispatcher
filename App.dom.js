import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout/Layout.dom';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import HomeScreen from './src/components/HomeScreen/HomeScreen.dom';
import UserDetails from './src/components/UserDetails/UserDetails.dom';
import ServiceReqCreate from './src/components/ServiceReqCreate/ServiceReqCreate.dom';
import ServiceReqsViewSelect from './src/components/ServiceReqsViewSelect/ServiceReqsViewSelect.dom';


ReactDOM.render(
    <BrowserRouter history={history}>
        <Layout>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/userdetails" component={UserDetails} />
                <Route exact path="/servicereqcreate" component={ServiceReqCreate} />
                <Route exact path="/srvsd" component={ServiceReqsViewSelect} />
            </Switch>
        </Layout>
    </BrowserRouter>,
    document.getElementById("app")
);
