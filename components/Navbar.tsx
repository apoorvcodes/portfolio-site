import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className='flex justify-between  bg-moon pt-12 pb-12 pl-32 pr-32'>
    <div className='font-curs text-6xl text-rose font-semibold'>Apoorv</div>
    <div className='flex flex-row space-x-6'>
     <div className='text-2xl text-peri hover:text-rose hover:font-bold'>Home</div>
     <div className='text-2xl text-peri hover:text-rose hover:font-bold'>Home</div>
     <div className='text-2xl text-peri hover:text-rose hover:font-bold'>Home</div>
    </div>
    </div>
  )
}

export default Navbar