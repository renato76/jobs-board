/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Pagination = ({ jobsPerPage, totalJobs, currentPage, setCurrentPage }) => {
  // console.log('Pagination Props >>>', props)

  // create a for loop to create page numbers
  const pageNumbers = []
  for (let i  = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(totalJobs)
  // const previous = () => setCurrentPage(currentPage - 1)
  // const next = () => setCurrentPage(currentPage + 1)

  // only do the Pagination once we have data
  if (pageNumbers.length === 0) {
    return <></>
  }

  return (
    <div>
      {pageNumbers.map(number => (
        <li key={number}>
          <a 
            onClick={() => setCurrentPage(number)}
            href="#">
            {number}
          </a>
        </li>
      ))}
    </div>
  )
}

export default Pagination
