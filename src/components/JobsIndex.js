import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_JOBS_QUERY } from '../queries/queries'
import styled from 'styled-components'

const JobsIndex = () => {
  const { loading, error, data } = useQuery(ALL_JOBS_QUERY);
  console.log(data)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oops there was an error!</p>

  return (
    <>
      <h1>Jobs</h1>
      {data.jobs.map((job) => (
        <JobsCard key={job.id} className="jobs">
          <Content>Job Title: {job.title}</Content>
          <Content>Company: {job.company.name}</Content>
        </JobsCard>
      ))}
    </>
  )
}

export default JobsIndex;

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