import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import ListJobs from '../components/ListJobs'

test('renders a job title', () => {
  const jobs = [{ 
    "id": "cjz1ipl9x009a0758hg68h7vy",
    "title": "Senior Fullstack Engineer",
    "company": {
    "name": "Platform at Segment",
    "websiteUrl": "http://segment.com"
  }}]

  render(
    <>
      <ListJobs key={jobs.id} jobs={jobs} />
    </>
  )
  expect(screen.getByTestId("job-title").innerHTML).toEqual("Senior Fullstack Engineer at Platform at Segment")
})
