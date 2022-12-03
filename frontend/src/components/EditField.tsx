import { useState } from 'react'


interface IProps {
  save: () => void
}

const EditField = ({ save }: IProps) => {
  const [updateFirstName, setUpdateFirstName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')
  const onSave = (e) => {
    e.preventDefault()
    const userUpdateData = {
      firstName: updateFirstName ? updateFirstName : 'lamine',
      lastName: updateLastName ? updateLastName : 'messaci',
    }
  }

  return (
    <div className='w-full mt-10 flex justify-center'>
      <form className='w-11/12 flex gap-5 sm:gap-10 '>
        <div className='w-1/2 flex flex-col gap-5 justify-center items-center sm:items-end'>
          <input
            className='w-11/12 p-2 placeholder:text-center'
            placeholder={'lamine'}
            onChange={(e) => setUpdateFirstName(e.target.value)}
          />
          <button onClick={onSave} className='w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold '>
            Save
          </button>
        </div>
        <div className='w-1/2 flex flex-col gap-5 justify-center items-center sm:items-start'>
          <input
            className='w-11/12 p-2 placeholder:text-center'
            placeholder={'lamine'}
            onChange={(e) => setUpdateLastName(e.target.value)}
          />
          <button onClick={save} className='w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditField
