import React, { Component } from 'react';
import api from '../../services/api';

import logo  from '../../assets/logo.svg';
import './styles.css'

export default class Main extends Component {
    state = { //garante atualização correta dos dados inseridos
        newBox: '',
    };
    
    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

        this.props.history.push(`/box/${response.data._id}`); //faz com que o usuario navegue para outras telas
    };
    
    handleInputChange = e => {
        this.setState({ newBox: e.target.value}); //altera o valor
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input placeholder="Criar um box" value={this.state.newBox} onChange={this.handleInputChange} />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
     }
}
