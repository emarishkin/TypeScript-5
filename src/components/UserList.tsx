import { FC } from "react"
import { IUser } from "./UserMassive"


interface UserListProps{
    users:IUser[]
}



const UserList:FC<UserListProps> = ({users}) => {
    return (
        <div style={{backgroundColor:'gray'}}>
          {users.map((user)=>
             <div>
               {user.id}. {user.name}{user.fullname},возраст {user.age} проживающий по адресу: город: {user.adress.city}, улица: {user.adress.street}, дом: {user.adress.house}
             </div>)}
        </div>
    )
}

export default UserList