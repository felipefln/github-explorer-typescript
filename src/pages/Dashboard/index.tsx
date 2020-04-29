import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <React.Fragment>
            <img src={logoImg} alt="github explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form >
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/33233733?s=460&u=1c90b55f42fd870be976adc663dd4d7af836a22d&v=4" alt="git-img" />

                    <div>
                        <strong>felipefln/github</strong>
                        <p>Github repositorios list</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/33233733?s=460&u=1c90b55f42fd870be976adc663dd4d7af836a22d&v=4" alt="git-img" />

                    <div>
                        <strong>felipefln/github</strong>
                        <p>Github repositorios list</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/33233733?s=460&u=1c90b55f42fd870be976adc663dd4d7af836a22d&v=4" alt="git-img" />

                    <div>
                        <strong>felipefln/github</strong>
                        <p>Github repositorios list</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

            </Repositories>
        </React.Fragment>

    )
}

export default Dashboard;
