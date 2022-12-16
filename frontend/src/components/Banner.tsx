const Banner: React.FC = () => {
  return (
    <div className='w-full h-[300px] sm-h-[300px] lg:h-[450px]  flex items-center justify-center  mb-10 	'>
      <div
        style={{ backgroundImage: 'url(/assets/bank-tree.jpeg)' }}
        className='relative w-full h-full  bg-cover bg-no-repeat object-cover	lg:bg-[center_top_-3rem]  xl:bg-[center_top_-6rem] 2xl:bg-[center_top_-8rem]'
      ></div>
      <div className=' absolute w-9/12 h-[160px] bg-white top-24 p-8	sm:w-[264px] sm:h-[170px] lg:top-[130px] lg:right-[60px] lg:w-[364px] lg:h-[212px]	lg:p-8 	lg:m-8'>
        <div className='mb-3.5 lg:mb-5'>
          <p className='font-bold leading-4 text-base	 lg:text-2xl lg:leading-7'>
            No fees. <br /> No minimum deposit. <br /> High interest rates.
          </p>
        </div>
        <div className=' 	'>
          <p className='leading-4 text-sm lg:text-lg lg:leading-6'>Open a savings account with Argent Bank today!</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
