
import { Link } from 'react-router-dom'

interface ICardAccount {
  linkedId: string
  check: string
  credit: number
  balance: string
  currency: string
}

const Card: React.FC<ICardAccount> = (props: ICardAccount) => {
  const { check, credit, balance, currency, linkedId } = props
  return (
    <section className='bg-white p-6 mb-8 w-10/12 sm:w-9/12 flex flex-col  sm:flex-row sm:justify-between sm:items-center'>
      <div className='flex text-black flex-col'>
        <p>{check}</p>
        <h2 className='text-4xl font-bold'>{currency} {credit}</h2>
        <p>{balance}</p>
      </div>
      <Link to={`/transactions/${linkedId}`}>
        <button className='mt-3 bg-[#00BC77] text-white p-2 w-full sm:w-44 font-bold border-r border-b border-black border-solid'>
          View transactions
        </button>
      </Link>
    </section>
  )
}

export default Card
