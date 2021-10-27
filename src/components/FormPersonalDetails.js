import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar align="center" title="Insira os detalhes pessoais" />
                    <TextField align="center"
                        hintText="Digite sua Profissão"
                        floatingLabelText="Profissão"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField 
                        hintText="Digite sua Cidade"
                        floatingLabelText="Cidade"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField 
                        hintText="Digite sua Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton 
                        label="Avançar"
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

export default FormPersonalDetails;
