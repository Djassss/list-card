import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Skeleton from './Skeleton';
import minus from  '../img/minus.png'
import plus from  '../img/plus.png'


// import { json } from 'stream/consumers';


function User ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) {
  return(
  <div className='myUsers'>
    <div>
      <img src={avatar} />
      <h3>
        {first_name} {last_name} <br/>
      <span>{email}</span>
      </h3>
      <div className='icon'>
        {/* <FontAwesomeIcon className='plus' icon={faPlus}/> */}
        <img onClick={() => onClickInvite(id)} src={`${isInvited ? minus : plus}`}/>
      </div>
    </div>
  </div>
  )
}



const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites 
  }) => {

  return (
    <div className='block'>

      <div className='users'>
        
      <div>
        <FontAwesomeIcon className='search' icon={faSearch}/>
        <input
          value={searchValue}
          onChange={onChangeSearchValue} 
          type="text"
          placeholder='search users' />
      </div>


        <div className='contact'>
          
          <div className='skeleton-list'>
            {/* <Skeleton />
            <Skeleton />
            <Skeleton /> */}
          </div>

          <div className='user-list'>
          {items.filter(obj => {
            const fullName = (obj.first_name + obj.last_name).toLowerCase();

            return (
              fullName.includes(searchValue.toLowerCase()) ||
              obj.email.toLowerCase().includes(searchValue.toLowerCase())
            )
          })
          .map((obj) => (
            <User 
            onClickInvite={onClickInvite}
              isInvited={invites.includes(obj.id)}
              key={obj.id}
              {...obj}
            />
          ))

          }
          </div>

        </div>

        <div className='myBtn'>

          {/* <button onClick={onClickSendInvites}>Send Invite</button> */}
          {
            invites.length > 0 && (
              <button onClick={onClickSendInvites}>Send Invite</button>
            )
          }
        </div>


      </div>
    </div>
  )
}

export default Users;