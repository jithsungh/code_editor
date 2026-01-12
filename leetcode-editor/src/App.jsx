import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProblemView from './components/ProblemView'
import { getAllProblems } from './utils/problemsData'
import './App.css'

function App() {
  const [problemsList, setProblemsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProblemsList = () => {
      try {
        const problems = getAllProblems()
        setProblemsList(problems)
        setLoading(false)
      } catch (error) {
        console.error('Error loading problems list:', error)
        setLoading(false)
      }
    }

    loadProblemsList()
  }, [])

  if (loading) {
    return <div className="app"><div className="loading">Loading problems...</div></div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/:problemId" element={<ProblemView problemsList={problemsList} />} />
      </Routes>
    </Router>
  )
}

export default App
