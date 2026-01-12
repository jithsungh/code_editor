// Utility to load problem data dynamically
export const loadProblem = async (problemId) => {
  try {
    // Pad the problem ID to 4 digits
    const paddedId = String(problemId).padStart(4, '0');
    
    // Try to import the problem JSON file
    const response = await fetch(`/problems/${paddedId}-*.json`);
    
    // For development, we'll need to handle this differently
    // Let's use a dynamic import approach
    const problemFiles = import.meta.glob('../../problems/*.json');
    
    // Find the matching file
    for (const path in problemFiles) {
      if (path.includes(`/${paddedId}-`)) {
        const module = await problemFiles[path]();
        return module.default;
      }
    }
    
    throw new Error(`Problem ${problemId} not found`);
  } catch (error) {
    console.error('Error loading problem:', error);
    return null;
  }
};

// Get list of all problems (for the problem list)
export const getAllProblems = async () => {
  const problemFiles = import.meta.glob('../../problems/*.json');
  const problems = [];
  
  for (const path in problemFiles) {
    const module = await problemFiles[path]();
    const problem = module.default;
    problems.push({
      id: problem.frontend_id || problem.problem_id,
      title: problem.title,
      difficulty: problem.difficulty,
      slug: problem.problem_slug
    });
  }
  
  // Sort by ID
  problems.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  
  return problems;
};
