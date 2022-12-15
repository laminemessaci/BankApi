
import { useEffect } from 'react'
import { IAccount } from '../redux/userReducerTypes'


const TransactTop: React.FC<IAccount> = ({ name, balance, currency, description }: IAccount) => {

    // eslint-disable-next-line react/prop-types
    // const { currentAccount: { name, balance, currency, description } } = props


    useEffect(() => {
        // TODO
    }, [])

    return (
        <section className="mt-16 p-6 bg-[#fff] h-auto text-center justify-center ">

            <div className=" h-auto flex-col relative justify-center mx-auto">
                <h3 className='font-normal text-2xl'>

                    {name}
                </h3>
                <p className="font-bold text-4xl ">{currency} {balance}</p>
                <p className="text-lg">{description}</p>
            </div>

        </section>
    )
}

export default TransactTop