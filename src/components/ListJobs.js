import React from 'react'
import styled from 'styled-components'

const ListJobs = ({ jobs }) => {
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
}

export default ListJobs

export const JobsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 94%;
  flex-wrap: wrap;
  height: 40px;
  margin: 8px 10px;
  border: 2px solid #296396;
  background-color: #296396;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`

export const Content = styled.p`
  margin: 0 0 0 20px;
`

export const Title = styled.h1`
  text-align: center;
`
