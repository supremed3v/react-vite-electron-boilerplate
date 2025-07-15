import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Root from './config/routes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
