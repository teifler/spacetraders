import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

Status.propTypes = {
  isGreen: PropTypes.bool,
}

function Status({ isGreen = false }) {
  return (
    <Wrapper>
      <div>{isGreen ? 'green' : 'red'}</div>
    </Wrapper>
  )
}

export default Status
const Wrapper = styled.section`
  padding: 12px;
  background-color: #ddd;
`

const StatusDot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: ${({ isGreen }) => (isGreen ? 'green' : 'red')};
  border-radius: 50%;
`
