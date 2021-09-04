import React, { useState } from 'react'
import ListJobs from './ListJobs'
import Pagination from './Pagination'

const JobsIndex = ({ data }) => {
  const jobs = data.jobs
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(10)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)
  console.log(jobs)

  return (
    <>
      <ListJobs jobs={currentJobs} />
      <Pagination 
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default JobsIndex;

