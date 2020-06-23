import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import {
//   Grid,
//   Row,
//   Col
// } from 'antd';

import { GithubOutlined } from '@ant-design/icons';

import {
  Grid,
  Image,
  Container,
  Header
} from 'semantic-ui-react'

import {
  Home,
  Details
} from "./components";


import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Grid columns={2} style={{ height: "100%" }}>
        <Grid.Row>
          <Grid.Column
            width={4}
            stretched
            textAlign="center"
            style={{ backgroundColor: '#24292e', color: "white" }}
          >
            <div className="center">
              <div style={{display: "block"}}>
                <GithubOutlined style={{ fontSize: 90 }} />
                <Header as='h4' color="pink">Github's Users Search</Header>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail/:username" component={Details} />
              </Switch>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default App;
