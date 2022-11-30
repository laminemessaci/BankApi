import { PropTypes } from 'prop-types'
import React from 'react'
import ReactLoading from 'react-loading'

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
function Loader({ type, color, width, height }) {
  return (
    <div flex items-center justify-center>
      <ReactLoading type={type} color={color} width={width} height={height} />
    </div>
  )
}

Loader.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.any || 200,
  height: PropTypes.any || 200,
}

export default Loader
