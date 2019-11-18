import React, { Component } from 'react'
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class UserListItem extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th scope="col">
                    <button  class='btn btn-sm col' > 
                        <FontAwesomeIcon icon={faUserEdit} />
                    </button>
                    <button onClick={this.props.delUser.bind(this, this.props.user.id)} class='btn btn-sm col' > 
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    </th>
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
