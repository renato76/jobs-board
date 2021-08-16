import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_JOBS_QUERY } from './queries/queries'

const App = () => {
  const { loading, error, data } = useQuery(ALL_JOBS_QUERY);

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oops there was an error!</p>

  return (
    <>
      <h1>Jobs</h1>
      {data.jobs.map((job) => (
        <>
          <p>{job.title}</p>
          <p>{job.company.name}</p>
        </>
      ))}
    </>
  )
}

export default App;
