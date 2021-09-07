import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom/extend-expect'
// import { ALL_JOBS_QUERY } from '../graphql/queries'
import App from '../App'

afterEach(cleanup)

test('renders jobs', async () => {
  const { getByText} = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  )
  expect(getByText('Loading...')).toBeInTheDocument()
})