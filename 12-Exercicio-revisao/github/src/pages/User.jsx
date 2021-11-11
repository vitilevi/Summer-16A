import React, { Component } from 'react';
import { fetchUniqueUser } from '../service/fetchGithubApi';

export default class User extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }

  fetchApi = async() => {
    const { match: { params: { user } } } = this.props;
    const result = await fetchUniqueUser(user);
    this.setState({
      user: result,
    })
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { user } = this.state;
    const { login, name, location, avatar_url, bio, followers, following, hireable} = user;
    console.log(user)
    return (
      <div>
        <div>
          <img src={ avatar_url } alt={ name } />
          <p>{ login }</p>
          <p>{ name }</p>
          { location && <p>{ location }</p>}
          { bio && <p>{ bio }</p>}
          <p>{ followers }</p>
          <p>{ following }</p>
          { hireable && <p>Disponível para tabalhar</p> }
        </div>
      </div>
    )
  }
}
