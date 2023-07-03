import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = ( { isloadingProps } ) => {
  return (
    <div className="loader-container">
          <BeatLoader color="#fcba03" isloadingProps={isloadingProps} />
        </div>
  )
}

export default Loading