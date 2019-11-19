import React, { Component } from 'react'

export class AddUser extends Component {
    onChange = (e) => {
        if (e.target.name === 'isEnabled'){
            if (e.target.value === 'true'){
                this.props.formUser.isEnabled = true;
            } else {
                this.props.formUser.isEnabled = false;
            }
        }else {
            this.setState({ [e.target.name]: e.target.value});
        }

        switch (e.target.name) {
            case 'username':
                this.props.formUser.username = e.target.value;
                break;
            case 'password':
                this.props.formUser.password = e.target.value;
                break;
            case 'name':
                this.props.formUser.name = e.target.value;
                break;
            case 'surname':
                this.props.formUser.surname = e.target.value;
                break;
            case 'email':
                this.props.formUser.email = e.target.value;
                break;
            case 'phone':
                this.props.formUser.phone = e.target.value;
                break;
            default:
                console.log(e.target.name +  'nao tratado');
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.formUser);
        this.props.addUser();
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
                            value={this.props.formUser.username}
                            onChange={this.onChange}
                            />
                            <input 
                            type="text"
                            name="password"
                            className='form-control col'
                            placeholder="Password" 
                            value={this.props.formUser.password}
                            onChange={this.onChange}
                            />
                            <select type="text"
                            name="isEnabled"
                            className='form-control col'
                            placeholder="select the status" 
                            value={this.props.formUser.isEnabled}
                            onChange={this.onChange}>
                                <option value="true">Enabled</option>
                                <option value="false">Disabled</option>
                            </select>
                        
                        
                            <input 
                            type="text"
                            name="name"
                            className='form-control col'
                            placeholder="Name" 
                            value={this.props.formUser.name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className='row'>
                            <input 
                            type="text"
                            name="surname"
                            className='form-control col'
                            placeholder="Surname" 
                            value={this.props.formUser.surname}
                            onChange={this.onChange}
                            />
                            <input 
                            type="text"
                            name="email"
                            className='form-control col'
                            placeholder="E-mail" 
                            value={this.props.formUser.email}
                            onChange={this.onChange}
                            />
                            <input 
                            type="text"
                            name="phone"
                            className='form-control col'
                            placeholder="Phone" 
                            value={this.props.formUser.phone}
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
