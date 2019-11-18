import React, { Component } from 'react'

export class AddUser extends Component {
    state = {
        id: null,
        username: '',
        password: '',
        isEnabled: true,
        registerDate: '',
        name: '',
        surname: '',
        email: '',
        phone: ''
    }
    
    onChange = (e) => {
        if (e.target.name === 'isEnabled'){
            if (e.target.value === 'true'){
                this.setState({ isEnabled: true});
            } else {
                this.setState({ isEnabled: false});
            }
        }else {
            this.setState({ [e.target.name]: e.target.value});
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const user = {
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            isEnabled: this.state.isEnabled,
            registerDate: Date.now(),
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.addUser(user);
        this.setState({id: null}); 
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({isEnabled: true});
        this.setState({registerDate: ''});
        this.setState({name: ''});
        this.setState({surname: ''});
        this.setState({email: ''});
        this.setState({phone: ''});
    }

    render() {
        return (
            <React.Fragment>
                
                <div className="row">
                    <h3 ><span className="badge badge-secondary">Add new User</span></h3>
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
                            name="password"
                            className='form-control col'
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                            <select type="text"
                            name="isEnabled"
                            className='form-control col'
                            placeholder="select the status" 
                            value={this.state.isEnabled}
                            onChange={this.onChange}>
                                <option value="true">Enabled</option>
                                <option value="false">Disabled</option>
                            </select>
                        
                        
                            <input 
                            type="text"
                            name="name"
                            className='form-control col'
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className='row'>
                            <input 
                            type="text"
                            name="surname"
                            className='form-control col'
                            placeholder="Surname" 
                            value={this.state.surname}
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
                            type="text"
                            name="phone"
                            className='form-control col'
                            placeholder="Phone" 
                            value={this.state.phone}
                            onChange={this.onChange}
                            />
                            <input
                                type="submit"
                                value="Add"
                                className='btn btn-secondary col'
                            />
                        </div>
                        
                    </form>
                
            </React.Fragment>
        )
    }
}

export default AddUser
