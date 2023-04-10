import React from 'react';

const Success = ({ count }) => {
  return (
    <div className='success'>
      <div>
        <img src={require('../img/correct.png')}  />
        <h2>Успешно!</h2>
        <p>всем {count} пользователям отправлено приглашение</p>
        <button onClick={() => window.location.reload()}>Back</button>
      </div>
    </div>
  )
}

export default Success;