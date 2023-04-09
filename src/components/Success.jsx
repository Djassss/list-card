import React from 'react';

const Success = () => {
  return (
    <div className='success'>
      <div>
        <img src={require('../img/correct.png')}  />
        <h2>Успешно!</h2>
        <p>всем пользователям отправлено приглашение</p>
        <button>Back</button>
      </div>
    </div>
  )
}

export default Success;