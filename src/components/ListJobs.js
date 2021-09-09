import React from 'react'
import styled from 'styled-components'

const ListJobs = React.memo(({ jobs }) => {
  const renderJobsData = () => {
    return jobs.map(job => {
      return (
        <JobsCardStyles key={job.id}>
          <ContentStyles data-testid="job-title">{job.title} at {job.company.name}</ContentStyles>
        </JobsCardStyles>
      )
    })
  }
  return (
    <>
      <TitleStyles>Jobs</TitleStyles>
      {renderJobsData()}
    </>
  )
})

export default ListJobs

export const JobsCardStyles = styled.div`
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

export const ContentStyles = styled.p`
  margin: 0 0 0 20px;
  font-family: Quicksand;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const TitleStyles = styled.h1`
  text-align: center;
  font-family: Quicksand;
  font-size: 27px;
`
