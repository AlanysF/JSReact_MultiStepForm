import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import App from '../App';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render(){
        const {values: {firstName, lastName, email, occupation, city, bio }} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar align="center" title="Confirme os dados do usuário" />
                    <List>
                        <ListItem align="center"
                        primaryText="Nome"
                        secondaryText={firstName}
                        />
                        <ListItem align="center"
                        primaryText="Sobrenome"
                        secondaryText={lastName}
                        />
                        <ListItem align="center"
                        primaryText="E-mail"
                        secondaryText={email}
                        />
                        <ListItem align="center"
                        primaryText="Profissão"
                        secondaryText={occupation}
                        />
                        <ListItem align="center"
                        primaryText="Cidade"
                        secondaryText={city}
                        />
                        <ListItem align="center"
                        primaryText="Bio"
                        secondaryText={bio}
                        />
                    </List>
                    <RaisedButton 
                        label="Confirme & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Voltar"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default Confirm;