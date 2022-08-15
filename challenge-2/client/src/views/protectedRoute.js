import { Navigate } from 'react-router-dom'

const useAuth = () => {
  const id = localStorage.getItem('id');
  if (id) return true;
  else return false;
}

const ProtectedRoute = ({ children }) => {
  const user = useAuth();
  return (user ? children : <Navigate to='/login' />)
}

export default ProtectedRoute;