import React, {Component} from "react";
import logor from "../logo.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as GithubCreators } from "../store/ducks/github";

import { Container, Repository } from "./style";
class CompareList extends Component {

    render() {
        return(
            <Container>
                
                {this.props.github.data.map(rep => (
                    <Repository key={rep.id}>
                        <div>
                        <header>
                            <img src={rep.owner.avatar_url}  alt="img" />
                            <strong>{rep.name}</strong>
                            <small>{rep.owner.login}</small>
                        </header>
    
                        <ul>
                            <li>
                            { rep.stargazers_count } <small>stars</small>
                            </li>
    
                            <li>
                            {rep.forks_count} <small>forks</small>
                            </li>
    
                            <li>
                            { rep.open_issues_count } <small>issues</small>
                            </li>
    
                            <li>
                            {rep.pushed_at} <small>Last commit</small>
                            </li>
                        </ul>
                        </div>
                    </Repository>
                ))}
            
            </Container>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators(GithubCreators, dispatch)

const mapStateToProps = state => ({
  github: state.github
})

export default connect(mapStateToProps, mapDispatchToProps)(CompareList);
