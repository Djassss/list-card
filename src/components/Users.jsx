import React from 'react'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
const Users = () => {
  return (
    <div className='block'>

      <div className='users'>
      <div>
        <FontAwesomeIcon className='search' icon={faSearch}/>
        <input type="text" placeholder='search users' />
      </div>


        <div className='contact'>
            <img src={require('../img/face.jpg')} />
            <h3>
              Jasur umarov <br/>
              <span>@jasurumarov.94@gmail.com</span>
            </h3>
            <FontAwesomeIcon className='plus' icon={faPlus}/>
        </div>
          <button>Send Invite</button>



      </div>
    </div>
  )
}

export default Users;