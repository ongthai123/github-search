import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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
    Header,
    Segment
} from 'semantic-ui-react'

const Details = () => {
    return (
        <React.Fragment>
            <Segment>
                <Container>
                    <Grid width="equal">
                        <Grid.Column width={14}>
                            
                        </Grid.Column>
                        <Grid.Column>
                            
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
            <Segment>
                <Container>
                    <Grid>
                        <Grid.Column>
                            <Grid.Row style={{ margin: "10px 0" }}>
                                <Header as="h4">Public repo: 0</Header>
                            </Grid.Row>
                            <Grid.Row style={{ overflow: "auto", maxHeight: "calc(100vh - 250px)" }}>
                                {/* {users.length != 0 ? users : noUser} */}
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </React.Fragment>
    );
}

export default Details;
