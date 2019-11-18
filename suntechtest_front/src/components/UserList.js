import React, { Component } from 'react'
import UserListItem from './UserListItem';

export class UserList extends Component {
    render() {
        return (
            <div>
                <table className="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">actions</th>
                        <th scope="col">id</th>
                        <th scope="col">username</th>
                        <th scope="col">password</th>
                        <th scope="col">is_enabled</th>
                        <th scope="col">register_date</th>
                        <th scope="col">name</th>
                        <th scope="col">surname</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.page.content.map((user) => (
                            <UserListItem user={user} key={user.id} editUser={this.props.editUser} delUser={this.props.delUser}/>))
                    }
                </tbody>
                </table>
            </div>
        )
    }
}

export default UserList
