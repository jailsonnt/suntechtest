import React, { Component } from 'react'

export class UserListItem extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">{this.props.user.id}</th>
                    <th scope="col">{this.props.user.username}</th>
                    <th scope="col">{this.props.user.password}</th>
                    <th scope="col">{this.props.user.isEnabled}</th>
                    <th scope="col">{this.props.user.registerDate}</th>
                    <th scope="col">{this.props.user.name}</th>
                    <th scope="col">{this.props.user.surname}</th>
                    <th scope="col">{this.props.user.email}</th>
                    <th scope="col">{this.props.user.phone}</th>
                </tr>
            </React.Fragment>
        )
    }
}

export default UserListItem
