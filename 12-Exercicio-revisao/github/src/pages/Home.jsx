import React, { Component } from 'react';
import { fetchAllUsers } from '../service/fetchGithubApi';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      results: [],
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      user: value,
    });
  }

  searchUser = async () => {
    const { user } = this.state;
    const results = await fetchAllUsers(user);
    this.setState({ results });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Insira um usuário"
            onChange={ this.handleChange }
          />
          <button onClick={ this.searchUser }>
            Buscar
          </button>
        </div>
        <div>
          { results.map(({ id, avatar_url, login }) => (
            <div key={ id }>
              <img src={ avatar_url } alt={ login } />
              <p>{ login }</p>
              <Link to={ `/user/${login}` }>
                Detalhes
              </Link>
            </div>
          )) }
        </div>
      </div>
    )
  }
}
