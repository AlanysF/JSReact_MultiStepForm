import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar align="center" title="Enviado com sucesso" />
                    <h1 align="center">Obrigada por enviar seu formulário!</h1>
                    <p align="center">Em breve você receberá um e-mail com mais instruções.</p>
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

export default Success;