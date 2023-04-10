import React from 'react';

const Success = ({ count }) => {
  return (
    <div className='success'>
      <div>
        <img src={require('../img/correct.png')}  />
        <h2>Successfully!</h2>
        <p>An{' '}{count}{' '}invitation has been sent to all users</p>
        <button onClick={() => window.location.reload()}>Back</button>
      </div>
    </div>
  )
}

export default Success;