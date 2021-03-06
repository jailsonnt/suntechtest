import React, { Component } from 'react'
import AddUser from '../AddUser';
import Filters from '../Filters';
import UserList from '../UserList';
import PageableControls from '../PageableControls';
import axios from 'axios';

class UserPage extends Component {
    state = {
        page: {
            "content": [
                
            ],
            "pageable": {
                "sort": {
                    "sorted": true,
                    "unsorted": false,
                    "empty": false
                },
                "pageNumber": 0,
                "pageSize": 10,
            },
            "totalElements": 0,
            "totalPages": 0,
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "numberOfElements": 0,
            "size": 0,
            "number": 0,
            "empty": false
        },
        formUser: {}
    }

    componentDidMount(){
        this.loadList();
      }

    loadList(url) {
        if (url !== null && url !== undefined){
            axios.get(url)
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.setState({ page: res.data });
            }, err => console.log(err));
        } else {
            axios.get('http://localhost:8442/api/user?page=1&rowsPerPage=5')
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.setState({ page: res.data });
            }, err => console.log(err));
        }
    }

    addUser = () => {
        console.log('cheguei');
        console.log(this.state.formUser);
        if (this.state.formUser.username !== '' && this.state.formUser.password !== '' && this.state.formUser.name !== '' && this.state.formUser.email !== ''){
            if (this.state.formUser.id !== null && this.state.formUser.id !== undefined && this.state.formUser.id > 0){
                console.log('Edit');
                axios.put('http://localhost:8442/api/user/' + this.state.formUser.id, this.state.formUser).then(res => {
                    console.log(res);
                    this.setState({ formUser: {} });
                    this.loadList();
                    
                }, err => {
                    console.error('erro adicionando usuario');
                    console.error(err);
                });
            } else {
                console.log('New');
                axios.post('http://localhost:8442/api/user', this.state.formUser).then(res => {
                    console.log(res);
                    this.setState({ formUser: {} });
                    this.loadList();
                    
                }, err => {
                    console.error('erro adicionando usuario');
                    console.error(err);
                });
            }
        }
        
    }

    editUser = (user) => {
        console.log('edit');
        console.log(user);
        this.setState({ formUser: user });
    }

    delUser = (id) => {
        console.log('delete');
        console.log(id);
        axios.delete(`http://localhost:8442/api/user/${id}`)
            .then(res => {
                console.log(res);
                this.loadList();
            });
    }

    nextPage = () => {
        if (this.state.page.number < this.state.page.totalPages -1){
            console.log(this.state.page.number + 2);
            axios.get(`http://localhost:8442/api/user?page=${this.state.page.number + 2}&rowsPerPage=5`)
            .then(res => {
                console.log(res.data);
                this.setState({ page: res.data });
                });
        }
    }

    previousPage = () => {
        if (this.state.page.number > 0){
            console.log(this.state.page.number);
            axios.get(`http://localhost:8442/api/user?page=${this.state.page.number}&rowsPerPage=5`)
                .then(res => {
                    console.log(res.data);
                    this.setState({ page: res.data });
            });
        }
    }

    firstPage = () => {
        console.log(1);
        axios.get(`http://localhost:8442/api/user?page=${1}&rowsPerPage=5`)
          .then(res => {
              console.log(res.data);
              this.setState({ page: res.data });
            });
    }

    lastPage = () => {
        console.log(this.state.page.totalPages);
        axios.get(`http://localhost:8442/api/user?page=${this.state.page.totalPages}&rowsPerPage=5`)
          .then(res => {
              console.log(res.data);
              this.setState({ page: res.data });
            });
    }

    filterUser = (filter) => {
        let url = `http://localhost:8442/api/user?page=${1}&rowsPerPage=5`;
        if (filter.username !== '') {
            url = url + '&usernameFilter='+ filter.username;
        }
        if (filter.name !== '') {
            url = url + '&nameFilter='+ filter.name;
        }
        if (filter.email !== '') {
            url = url + '&emailFilter='+ filter.email;
        }
        console.log(filter);
        this.loadList(url);
    }

    render() {
        return (
            <div className='container-fluid'>
                <AddUser formUser={this.state.formUser} addUser={this.addUser} />
                <Filters filterUser={this.filterUser}/>
                <UserList page={this.state.page} editUser={this.editUser} delUser={this.delUser}/>
                <PageableControls 
                    pageNumber={this.state.page.number + 1} 
                    totalPages={this.state.page.totalPages} 
                    totalElements={this.state.page.totalElements} 
                    numberOfElements={this.state.page.numberOfElements}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    firstPage={this.firstPage}
                    lastPage={this.lastPage}
                />
            </div>
        )
    }
}

export default UserPage;