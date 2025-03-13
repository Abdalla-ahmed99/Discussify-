import React from 'react'

function userDrop() {
  return (
    <div>
      <select name="users" id="users" onChange={() => console.log("value")}>
            {users.map((user, index) => (
                <option key={index} value={user.id}
                >{user.firstName}</option>
            ))}
        </select>
    </div>
  )
}

export default userDrop



