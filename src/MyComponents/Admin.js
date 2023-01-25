import React, {useEffect, useState} from 'react';

export const Admin = () => {
    return(
        <div>
            <div className='admin'>
                <h1> welcome to admin page</h1>
                <form method='POST' action='/admin'>
                    <input type="text" placeholder="username" name="adminadd"></input><p></p>
                    <input type="password" placeholder="password" ></input><p></p>
                    <a href="https://google.com"><button >Login</button></a>
                </form>
            </div>
        </div>
    )
}

//export default Admin;