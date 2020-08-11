import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class Register extends React.Component {

    handleChange = () => {

    }

    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: '450px' }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for DevChat
                    </Header>

                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid name="username" type="text"
                                placeholder="Username" icon="user" iconPosition="left"
                                onChange={this.handleChange}
                            />


                            <Form.Input fluid name="email" type="email"
                                placeholder="Email Address" icon="mail" iconPosition="left"
                                onChange={this.handleChange}
                            />

                            <Form.Input fluid name="password" type="password"
                                placeholder="Password" icon="lock" iconPosition="left"
                                onChange={this.handleChange}
                            />

                            <Form.Input fluid name="passwordConfirmation" type="password"
                                placeholder="Password Confirmation" icon="repeat" iconPosition="left"
                                onChange={this.handleChange}
                            />

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>

                    <Message>Aleady a user? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;