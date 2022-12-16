import React from 'react'
import ReactLoading, { LoadingType } from 'react-loading'

/**
 * Component that displays a Loader
 *
 * @param   {string}  type   type of  loader
 * @param   {string}  color  loader color
 * @param   {string}  width   Dimensions
 * @param   {string}  height  Dimensions
 *
 * @return {JSX.Element}
 */

interface ILoader {
  type: LoadingType
  color: string
  width?: string | number
  height?: string | number
}
const Loader: React.FC<ILoader> =({ type, color, width, height }: ILoader) =>{
  return (
    <div className='  items-center justify-center'>
      <ReactLoading type={type} color={color} width={width} height={height} />
    </div>
  )
}

export default Loader
