import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
const Ocult = () => {
  const { isAuthenticated } = useContext(AuthContext)
  if (isAuthenticated) {
    return <Dashboard />
  }
  return (
    <div>
      <Login></Login>
    </div>
  )
}

export default Ocult
