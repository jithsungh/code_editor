// This file pre-loads all problem data for quick access
const problemsCache = {}

// Import all problem files
// From leetcode-editor/src/utils/problemsData.js to problems/ folder at root
// Need to go up 3 levels: utils -> src -> leetcode-editor -> workspace root
const problemFiles = import.meta.glob('../../../problems/*.json', { eager: true })

console.log('Total problem files found:', Object.keys(problemFiles).length)
console.log('Sample paths:', Object.keys(problemFiles).slice(0, 5))

// Build the cache on load
for (const path in problemFiles) {
  try {
    const fileName = path.split('/').pop()
    const problemId = fileName.split('-')[0] // Extract ID from filename like "0001-two-sum.json"
    const numericId = parseInt(problemId, 10).toString() // Convert "0001" to "1"
    
    const problemData = problemFiles[path].default
    
    // Cache by numeric ID (e.g., "1", "2", "3")
    problemsCache[numericId] = {
      data: problemData,
      fileName: fileName
    }
    
    // Also cache by the frontend_id from the JSON to be safe
    if (problemData.frontend_id) {
      const frontendId = problemData.frontend_id.toString()
      if (!problemsCache[frontendId]) {
        problemsCache[frontendId] = {
          data: problemData,
          fileName: fileName
        }
      }
    }
  } catch (error) {
    console.error('Error loading problem from path:', path, error)
  }
}

console.log('Problems cache built:', Object.keys(problemsCache).length, 'entries')
console.log('Sample cached IDs:', Object.keys(problemsCache).slice(0, 10))

export const getProblem = (problemId) => {
  const id = problemId.toString()
  const problem = problemsCache[id]?.data
  if (!problem) {
    console.log('❌ Problem not found for ID:', id)
    console.log('Available IDs (first 20):', Object.keys(problemsCache).slice(0, 20))
  } else {
    console.log('✅ Problem found:', id, '-', problem.title)
  }
  return problem || null
}

export const getAllProblems = () => {
  const problems = []
  
  for (const id in problemsCache) {
    const problem = problemsCache[id].data
    problems.push({
      id: problem.frontend_id || problem.problem_id,
      title: problem.title,
      difficulty: problem.difficulty,
      slug: problem.problem_slug,
      fileName: problemsCache[id].fileName
    })
  }
  
  problems.sort((a, b) => parseInt(a.id) - parseInt(b.id))
  return problems
}

export default {
  getProblem,
  getAllProblems
}
