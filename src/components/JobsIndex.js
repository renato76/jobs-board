import React, { useState } from 'react'
import ListJobs from './ListJobs'
import Pagination from './Pagination'

const JobsIndex = ({ jobs }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(10)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.jobs.slice(indexOfFirstJob, indexOfLastJob)
  console.log(jobs)

  // create a Pagination component and pass props down to it from here

  return (
    <>
      <ListJobs jobs={currentJobs} />
      <Pagination 
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.jobs.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default JobsIndex;

