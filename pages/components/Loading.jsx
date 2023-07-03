import React from 'react'
import { Container } from 'react-bootstrap'
import { BeatLoader } from 'react-spinners'

const Loading = ( { isloadingProps } ) => {
  return (
    <Container>
<div className="loader-container">
          <BeatLoader color="#fcba03" isloadingProps={isloadingProps} />
        </div>
    </Container>
    
  )
}

export default Loading