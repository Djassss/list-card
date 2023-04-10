import React, { useEffect, useState } from 'react'
import Users from './components/Users';
import Success from './components/Success';
// import { json } from 'stream/consumers';


import './styles/app.scss'
import './styles/users.scss'
import './styles/success.scss'

const App = () => {
  const[users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);


    useEffect(() => {
      fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('ошибка при получении пользователей')
      })
      .finally(() => setLoading(false));
    },[]);

    const onChangeSearchValue = (event) => {
      setSearchValue(event.target.value);
    };

    const onClickInvite = (id) => {
      if(invites.includes(id)) {
        setInvites(prev => prev.filter(_id => _id != id));
      }else{
        setInvites(prev => [...prev, id]);
      }
    };

    const onClickSendInvites = () => {
      setSuccess(true);
    }

  return (
    <div>
      { success ? (<Success  count={invites.length}/>
       ):
        (<Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue} 
          items={users}
          isLoading={isLoading} 
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
        )}

    
    </div>
  )
}

export default App;
