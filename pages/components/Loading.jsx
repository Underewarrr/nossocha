import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = ( { isLoading } ) => {
  return (
    <div className="loader-container">
          <BeatLoader color="#fcba03" isLoading={isLoading} />
        </div>
  )
}

export default Loading