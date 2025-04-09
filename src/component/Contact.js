import React from 'react'

const Contact = () => {
  return (
    <div className='m-4 p-4  rounded-lg bg-gray-200 hover:bg-gray-400'>
      <h1 className='font-bold'>Contact Here</h1>
<form  >
  <input className='border-black p-2 m-2' type="text"  placeholder='name'/>
  <input className='border-black p-2 m-2' type="text" placeholder='Mobile no' />
  <button className='border-black p-2 m-2 bg-black rounded-lg text-white'> Submit </button>
</form>
    </div>
  )
}

export default Contact
