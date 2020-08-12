import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase'


class Register extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: []
    };

    isFormValid = () => {

        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            error = { message: 'Fill in all fields' };
            this.setState({ errors: errors.concat(error) });

            return false;
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: 'Password is invalid' };
            this.setState({ errors: errors.concat(error) });

            return false;
        } else {
            // form valid
            return true;
        }
    }

    isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;
    }

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        if (this.isFormValid()) {
            event.preventDefault();
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(createdUser => {
                    console.log(createdUser)
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    render() {

        const { username, email, password, passwordConfirmation, errors } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: '450px' }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for DevChat
                    </Header>

                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid name="username" type="text"
                                placeholder="Username" icon="user"
                                iconPosition="left"
                                onChange={this.handleChange}
                                value={username}
                            />


                            <Form.Input fluid name="email" type="email"
                                placeholder="Email Address" icon="mail"
                                iconPosition="left"
                                onChange={this.handleChange}
                                value={email}
                            />

                            <Form.Input fluid name="password" type="password"
                                placeholder="Password" icon="lock"
                                iconPosition="left"
                                value={password}
                                onChange={this.handleChange}
                            />

                            <Form.Input fluid name="passwordConfirmation" type="password"
                                placeholder="Password Confirmation"
                                icon="repeat" iconPosition="left"
                                value={passwordConfirmation}
                                onChange={this.handleChange}
                            />

                            <Button type="submit" color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>

                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}

                    <Message>Aleady a user? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;