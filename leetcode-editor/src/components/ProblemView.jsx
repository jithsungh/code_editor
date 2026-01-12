import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { getProblem } from '../utils/problemsData'
import './ProblemView.css'

function ProblemView({ problemsList }) {
  const { problemId } = useParams()
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [code, setCode] = useState('')
  const [activeTab, setActiveTab] = useState('description')
  const [problemData, setProblemData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showProblemList, setShowProblemList] = useState(false)

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python3', label: 'Python3' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'golang', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'csharp', label: 'C#' },
  ]

  const languageMap = {
    javascript: 'javascript',
    python3: 'python',
    java: 'java',
    cpp: 'cpp',
    typescript: 'typescript',
    golang: 'go',
    rust: 'rust',
    csharp: 'csharp',
  }

  useEffect(() => {
    const loadProblem = () => {
      setLoading(true)
      try {
        const id = problemId || '1'
        const data = getProblem(id)
        
        if (data) {
          setProblemData(data)
          setCode(data.code_snippets[selectedLanguage] || '')
          setLoading(false)
        } else {
          console.error('Problem not found:', id)
          if (id !== '1') {
            navigate('/1')
          } else {
            setLoading(false)
          }
        }
      } catch (error) {
        console.error('Error loading problem:', error)
        setLoading(false)
      }
    }

    loadProblem()
  }, [problemId, navigate, selectedLanguage])

  useEffect(() => {
    if (problemData && problemData.code_snippets) {
      setCode(problemData.code_snippets[selectedLanguage] || '')
    }
  }, [selectedLanguage, problemData])

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return '#00b8a3'
      case 'medium':
        return '#ffc01e'
      case 'hard':
        return '#ef4743'
      default:
        return '#fff'
    }
  }

  const handleProblemSelect = (id) => {
    navigate(`/${id}`)
    setShowProblemList(false)
  }

  if (loading) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-left">
            <h1 className="logo">CheatCode</h1>
          </div>
        </header>
        <div className="loading">Loading problem...</div>
      </div>
    )
  }

  if (!problemData) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-left">
            <h1 className="logo">CheatCode</h1>
          </div>
        </header>
        <div className="error">Problem not found</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <h1 className="logo" onClick={() => navigate('/')}>CheatCode</h1>
          <button 
            className="problem-list-btn"
            onClick={() => setShowProblemList(!showProblemList)}
          >
            Problem List
          </button>
        </div>
        <div className="header-right">
          <button className="header-btn">Premium</button>
        </div>
      </header>

      {showProblemList && (
        <div className="problem-list-overlay" onClick={() => setShowProblemList(false)}>
          <div className="problem-list-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="problem-list-header">
              <h3>All Problems ({problemsList.length})</h3>
              <input 
                type="text" 
                placeholder="Search problems..." 
                className="problem-search"
              />
            </div>
            <div className="problem-list-content">
              {problemsList.slice(0, 100).map((problem) => (
                <div
                  key={problem.id}
                  className={`problem-item ${problem.id === problemId ? 'active' : ''}`}
                  onClick={() => handleProblemSelect(problem.id)}
                >
                  <span className="problem-id">{problem.id}.</span>
                  <span className="problem-title">{problem.title}</span>
                  <span 
                    className="problem-difficulty"
                    style={{ color: getDifficultyColor(problem.difficulty) }}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="main-content">
        <div className="left-panel">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`tab ${activeTab === 'solution' ? 'active' : ''}`}
              onClick={() => setActiveTab('solution')}
            >
              Solution
            </button>
          </div>

          <div className="problem-content">
            {activeTab === 'description' ? (
              <>
                <h2 className="problem-title">
                  {problemData.frontend_id}. {problemData.title}
                </h2>

                <div className="problem-meta">
                  <span
                    className="difficulty"
                    style={{ color: getDifficultyColor(problemData.difficulty) }}
                  >
                    {problemData.difficulty}
                  </span>
                  <div className="topics">
                    {problemData.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="problem-description">
                  <p>{problemData.description}</p>
                </div>

                <div className="examples">
                  {problemData.examples.map((example) => (
                    <div key={example.example_num} className="example">
                      <h4>Example {example.example_num}:</h4>
                      <pre>{example.example_text}</pre>
                    </div>
                  ))}
                </div>

                <div className="constraints">
                  <h4>Constraints:</h4>
                  <ul>
                    {problemData.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="solution-content">
                <h3>Solution</h3>
                <div dangerouslySetInnerHTML={{ __html: problemData.solution || '<p>Solution not available</p>' }} />
              </div>
            )}
          </div>
        </div>

        <div className="right-panel">
          <div className="editor-header">
            <select
              className="language-selector"
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <div className="editor-actions">
              <button 
                className="editor-btn"
                onClick={() => setCode(problemData.code_snippets[selectedLanguage] || '')}
              >
                Reset
              </button>
              <button className="editor-btn primary">Run</button>
              <button className="editor-btn success">Submit</button>
            </div>
          </div>

          <div className="editor-container">
            <Editor
              height="calc(100vh - 140px)"
              language={languageMap[selectedLanguage]}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                automaticLayout: true,
                tabSize: 2,
                renderWhitespace: 'selection',
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: 'on',
                smoothScrolling: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemView

