import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,
        users: state.users.filter(user=> action.payload !== user.id)
      }
      default:
        return state
  }
}

export class UserProvider extends Component {
    state = {
        users:[
          {
            id : 1,
            name : 'Hasan',
            salary : '7000',
            department : 'Frontend Development'
          },
          {
            id : 2,
            name : 'Hüseyin',
            salary : '8000',
            department : 'Backend Development'
          },
          {
            id : 3,
            name : 'Hans',
            salary : '9000',
            department : 'Software Development'
          }
        ],
        dispatch: action => {
          this.setState(state => reducer(state, action))
        }
      }
    render() {
        return (
           <UserContext.Provider value={this.state}>
               {this.props.children}
           </UserContext.Provider> 
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
