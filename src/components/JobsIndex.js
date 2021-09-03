import React, { useState } from 'react'
import ListJobs from './ListJobs'

const JobsIndex = ({ jobs }) => {
  const [currentPage] = useState(1)
  const [jobsPerPage] = useState(10)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.jobs.slice(indexOfFirstJob, indexOfLastJob)
  console.log(currentJobs)

  return (
    <>
      <ListJobs jobs={currentJobs} />
    </>
  )
}

export default JobsIndex;

