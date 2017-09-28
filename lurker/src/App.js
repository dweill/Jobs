import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Table from './Table';
import axios from 'axios';




// const pop = ['rickle', 'pickle', 'tickle'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payLoad: null,
      authorized: false,
    }
    const urlParams = new URLSearchParams(window.location.search);
    let code;
    // let payLoad;

    if (urlParams.get('state') === "lfadlfkjs") {
      code = urlParams.get('code')
    }
    console.log(code);
    const retrieval = () => {
      axios({
        method: 'POST',
        url: 'https://www.reddit.com/api/v1/access_token',
        data: params,
        auth: {
          username: 'C4kQu5gu5XoRWw',
          password: 'LLgxaLN8ksR7gvRyCx5Xji29jqk',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic QzRrUXU1Z3U1WG9SV3c6TExneGFMTjhrc1I3Z3ZSeUN4NVhqaTI5anFr'
        },
      }).then(res => {
        console.log(res.data);
        let token = res.data.access_token;
        posts(token);

      }).catch(err => console.error(err))
    }
    if (code) {
      var params = "grant_type=" + 'authorization_code' + "&code=" + code + "&redirect_uri=" + 'http://104.131.120.37/';
      retrieval();
    }
    const posts = (token) => {
      axios.get('https://oauth.reddit.com/r/all/hot', {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }).then(response => {
        let payLoad = response.data.children
        console.log(response.data.data.children)
        this.setState({ payLoad: response.data.data.children, authorized: true });
        console.log(this);
      }).catch(error => console.error(error))
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <div className="App-header">
            <h1>Lurker</h1>
            <h2>A Client for Reddit</h2>
          </div>
          {this.state.authorized ? <div></div> : <Button text="Let's get started" link="https://www.reddit.com/api/v1/authorize.compact?client_id=C4kQu5gu5XoRWw&response_type=code&state=lfadlfkjs&redirect_uri=http://104.131.120.37/&duration=permanent&scope=read" />}
        </div>
        <div>
          <Table data={this.state.payLoad}/>
        </div>
      </div>
    );
  }
}

export default App;
