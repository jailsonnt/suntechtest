import React, { Component } from 'react'

export class Filters extends Component {
    state = {
        username: '',
        name: '',
        email: ''
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const filter = {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email
        }
        this.props.filterUser(filter);
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                <h3 ><span className="badge badge-secondary">Filters</span></h3>
                </div>
                <form  onSubmit={this.onSubmit} className='form-group' >
                        <div className='row'>
                            <input 
                            type="text"
                            name="username"
                            placeholder="Username" 
                            className='form-control col'
                            value={this.state.username}
                            onChange={this.onChange}
                            />
                            
                            <input 
                            type="text"
                            name="name"
                            className='form-control col'
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        
                        
                            <input 
                            type="text"
                            name="email"
                            className='form-control col'
                            placeholder="E-mail" 
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                            <input
                                type="submit"
                                value="Filter"
                                className='btn btn-secondary col'
                            />
                        </div>
                        
                    </form>
                
            </React.Fragment>
        )
    }
}

export default Filters
