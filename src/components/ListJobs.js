import React, { useEffect } from 'react'
import styled from 'styled-components'

const ListJobs = React.memo(({ jobs }) => {
  useEffect(() => {
    console.log('Jobs Rendered >>>', jobs)
  })
  const renderJobsData = () => {
    return jobs.map(job => {
      return (
        <JobsCard key={job.id}>
          <Content>{job.title} at {job.company.name} </Content>
        </JobsCard>
      )
    })
  }
  return (
    <>
      <Title>Jobs</Title>
      {renderJobsData()}
    </>
  )
})

export default ListJobs

export const JobsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 40px;
  margin: 3px 10px;
  background-color: #296396;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: 500ms;
  &:hover {
  background-color: #4089C8;
  transition: 500ms;
  }  
`

export const Content = styled.p`
  margin: 0 0 0 20px;
  font-family: Quicksand;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-family: Quicksand;
  font-size: 27px;
`
