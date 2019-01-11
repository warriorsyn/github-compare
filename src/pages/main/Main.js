import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as GithubCreators } from "../../store/ducks/github";
import { Container, Form } from "./style";

import CompareList from "../../components/CompareList";
import logo from "../../assets/logo.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toastify from "../../components/toastify/Toastify";
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repository: "",
      error: false
    }
  }



  handleSubmit = e => {
    e.preventDefault();
    
    this.props.addRepositoryRequest(this.state.repository);
  }

  handleInputChange = e => {
    this.setState({ repository: e.target.value });
  }

  render() {
    console.log(this.props.github)
    return (
      <Container>
        { this.props.github.error.status && <Toastify types="error" error={this.props.github.error.string}/>}
          <img src={logo} alt="logo" />
          <Form onSubmit={this.handleSubmit}>
            <input 
            placeholder="Repository/User" 
            value={this.state.repository}
            onChange={this.handleInputChange}
            />
            <button>Search</button>
          </Form>

          <CompareList />

      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(GithubCreators, dispatch)

const mapStateToProps = state => ({
  github: state.github
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
