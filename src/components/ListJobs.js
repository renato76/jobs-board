import React from 'react'
import styled from 'styled-components'

const ListJobs = ({ jobs }) => {
  const renderJobsData = () => {
    return jobs.map(job => {
      return (
        <JobsCard key={job.id}>
          <Content>Job Title: {job.title}</Content>
          <Content>Company: {job.company.name}</Content>
        </JobsCard>
      )
    })
  }
  return (
    <>
      <h1>Jobs</h1>
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
  height: 100px;
  margin: 20px 10px;
  border: 2px solid #296396;
  background-color: #296396;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`

export const Content = styled.p`
  margin-left: 20px;
`
