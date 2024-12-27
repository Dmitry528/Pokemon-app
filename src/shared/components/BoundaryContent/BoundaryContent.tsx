import { Paths } from "AppRouter"
import { Link } from "react-router"

interface IBoundaryContentProps {
  title: string
  onReset: () => void
  error: {
    message: string
  }
} 

export const BoundaryContent = ({
  error,
  title = 'Something went wrong!',
  onReset,
}: IBoundaryContentProps) => {
  return (
    <div>
      <p>{title}</p>
      <button onClick={onReset}>Reset</button>
      <Link to={Paths.Pokemons}>Home</Link>
      <pre>{error.message}</pre>
    </div>
  )
}

export default BoundaryContent