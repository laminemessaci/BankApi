import React from 'react'
import { FEAT_DATA } from '../constants'

const Features: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-center lg:items-center w-full'>
      {FEAT_DATA.map((elt, index) => (
        <div key={index} className='lg:w-1/3'>
          <div className='w-full h-auto mx-auto p-10 lg:min-w-[270px] lg:flex lg:flex-col lg:justify-center lg:items-center '>
            <div className=' h-40 w-40 mx-auto border-[#00BC77] border-[10px] rounded-full p-3 '>
              <img src={`/assets/${elt.icon}`} alt={FEAT_DATA[0].label} className='w-full h-full' />
            </div>
            <p className='text-center mt-5 mb-2 font-bold text-xl w-4/5 mx-auto '>{elt.titre}</p>
            <p className='text-center leading-5 3'>{elt.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Features
