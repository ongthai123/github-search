import React, { useState } from 'react';

import { Input, Empty, message } from 'antd';

import {
    Grid,
    Image,
    Container,
    Header,
    Segment,
    Button
} from 'semantic-ui-react'

import { getUsers } from '../api'

const Home = () => {

    const [keyword, setKeyword] = useState('');
    const [userList, setUserList] = useState([]);
    // const [handleSearch] = useFetchDataHook(keyword);

    const handleInputChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleSearch = async () => {
        if (keyword.trim() === "") {
            message.warning('Please enter some keyword to search.');
        }
        else {
            const result = await getUsers(keyword);

            setUserList(result.items);
        }

    }

    const users = userList.map((user, i) =>
        <Segment key={i}>
            <Grid columns='equal'>
                <Grid.Column width={1}>#{i + 1}</Grid.Column>
                <Grid.Column width={12}>
                    <Grid>
                        <Grid.Column width={3}>
                            <Image src={user.avatar_url} size="mini" circular />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Grid.Row><Header as="h5">{user.login}</Header></Grid.Row>
                            <Grid.Row><a href={user.html_url} target="_blank">Github Link</a></Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column floated={"right"}>
                    <Button color="blue">Details</Button>
                </Grid.Column>
            </Grid>
        </Segment>
    )

    const noUser = (
        <Empty />
    )

    return (
        <React.Fragment>
            <Segment>
                <Container>
                    <Grid width="equal">
                        <Grid.Column width={14}>
                            <Input.Search
                                value={keyword}
                                placeholder="Search by username"
                                enterButton
                                onChange={handleInputChange}
                                onSearch={handleSearch}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                basic
                                onClick={() => setUserList([])}
                            >
                                Clear
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
            <Segment>
                <Container>
                    <Grid>
                        <Grid.Column>
                            <Grid.Row style={{margin: "10px 0"}}>
                                <Header as="h4">Result found: {userList.length}</Header>
                            </Grid.Row>
                            <Grid.Row style={{ overflow: "auto", maxHeight: "calc(100vh - 250px)" }}>
                                {users.length != 0 ? users : noUser}
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </React.Fragment>
    );
}

export default Home;
