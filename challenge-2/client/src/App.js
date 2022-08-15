import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./views/login"
import Dashboard from "./views/dashboard"
import ProtectedRoute from "./views/protectedRoute"
import { useState, useEffect } from "react"
import api from "./api"

function App() {

  const [user, setUser] = useState('');

  const getUser = async (id) => {
    const response = await api.get(`/api/users/${id}`)
    const data = await response.data
    if (data) {
      setUser(data.response)
    }
  }

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id) getUser(id)
  }, [])

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<ProtectedRoute user={user}><Dashboard user={user}/></ProtectedRoute>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
