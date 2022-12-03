

interface IAccount {
  check: string
  credit: string
  balance: string
}

const Card = ({ check, credit, balance }: IAccount) => {
  return (
    <section className='bg-white p-6 mb-8 w-10/12 sm:w-9/12 flex flex-col  sm:flex-row sm:justify-between sm:items-center'>
      <div className='flex text-black flex-col'>
        <p>{check}</p>
        <h2 className='text-4xl font-bold'>{credit}</h2>
        <p>{balance}</p>
      </div>
      <button className='mt-3 bg-[#00BC77] text-white p-2 w-full sm:w-44 font-bold border-r border-b border-black border-solid'>
        View transactions
      </button>
    </section>
  )
}

export default Card
