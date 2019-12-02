import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { get } from '../ajax'
import { Form, Container, Button} from 'react-bootstrap'
import store from '../store'    

export default class ShowTopic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: null
        }
        this.getTopic = this.getTopic.bind(this)
        this.getTopic(this.props.match.params.id)
    }

    getTopic(id) {
       get('/topics/' + id).then(resp => {
            this.setState({topic: resp})
        })
    }

render() {
        if(this.state.topic) {
	console.log(this.state.topic.id)
            return(
                <Container>
                    <h1>Topic</h1>
                    <h6>Title: {this.state.topic.title}</h6>
            <Link className="btn btn-primary ml-auto d-block" to=
		    {{
		      pathname:"/new_comment", 
	              state:{
			      id: this.state.topic.id 
		      }
				    
		    }}
		    >Create Comment</Link>
                </Container>
            )
        } else {
            return null
        }
    }
}
