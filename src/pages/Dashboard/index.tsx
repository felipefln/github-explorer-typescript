import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
    return (
        <React.Fragment>
            <img src={logoImg} alt="github explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form >
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
        </React.Fragment>

    )
}

export default Dashboard;
