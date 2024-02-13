import { useLoaderData, useParams } from "react-router-dom"

const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {`$${career.salary}`}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem repudiandae harum. Quis voluptatibus fuga sint rerum dolorem natus. Ipsa distinctio, provident necessitatibus perspiciatis maiores porro illum quibusdam. Incidunt, doloremque!</p>
      </div>
    </div>
  )
}

// loader function
// eslint-disable-next-line react-refresh/only-export-components
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/careers/' + id)

  if (!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}

export default CareerDetails