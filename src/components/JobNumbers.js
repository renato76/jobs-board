import React from 'react'
import styled from 'styled-components'

const JobNumbers = ({ indexOfFirstJob, indexOfLastJob }) => {
  console.log(indexOfFirstJob, indexOfLastJob)
  return (
    <JobNumbersStyles>
      <p>Displaying results {indexOfFirstJob +1} to {indexOfLastJob}</p>
    </JobNumbersStyles>
  )
}

export default JobNumbers

const JobNumbersStyles = styled.div`
  display: flex;
  justify-content: center;
`