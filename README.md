# LeetCode Editor - AI Interviewer POC

A professional web-based code editor that replicates LeetCode's interface, built with React and Monaco Editor. This is a proof-of-concept for an AI Interviewer project, demonstrating how to integrate a code IDE into a web application.

## 🎯 Project Purpose

This POC was created as a **feasibility analysis** for building an AI Interviewer platform. It demonstrates:
- Loading and displaying 2900+ LeetCode problems from JSON files
- URL-based navigation between problems
- Professional code editing experience with Monaco Editor
- Multi-language code snippet support

## ✨ Features

✅ **2900+ LeetCode Problems** - Complete problem bank loaded from JSON files  
✅ **URL-based Navigation** - Direct access via `localhost:5173/<problem-id>`  
✅ **Problem List Browser** - Dropdown showing first 100 problems with search capability  
✅ **8 Programming Languages** - JavaScript, Python3, Java, C++, TypeScript, Go, Rust, C#  
✅ **Monaco Editor** - Full VS Code editing experience in the browser  
✅ **Dark Theme** - Professional LeetCode-style UI  
✅ **Split Panel Layout** - Problem description (left) + Code editor (right)  
✅ **Tabs Interface** - Switch between Description and Solution views  
✅ **Responsive Design** - Adapts to different screen sizes  
✅ **Auto Code Templates** - Language-specific starter code for each problem  

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd leetcode-editor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   **Or use the convenient batch file (Windows):**
   ```bash
   start.bat
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```

The app will automatically redirect to Problem #1 (Two Sum).

## 📖 Usage Guide

### Navigating Problems

| Action | URL | Description |
|--------|-----|-------------|
| Home | `http://localhost:5173/` | Redirects to Problem #1 |
| Specific Problem | `http://localhost:5173/2` | Load Problem #2 (Add Two Numbers) |
| Any Problem | `http://localhost:5173/<id>` | Replace `<id>` with any problem number (1-3640+) |

**Examples:**
- Problem #1: `http://localhost:5173/1` - Two Sum (Easy)
- Problem #2: `http://localhost:5173/2` - Add Two Numbers (Medium)  
- Problem #4: `http://localhost:5173/4` - Median of Two Sorted Arrays (Hard)

### Using the Problem List

1. Click the **"Problem List"** button in the header
2. Browse through the first 100 problems
3. See difficulty level (color-coded: 🟢 Easy, 🟡 Medium, 🔴 Hard)
4. Click any problem to navigate instantly
5. URL updates automatically

### Editor Features

| Feature | Description |
|---------|-------------|
| **Language Selector** | Dropdown in top-right to switch between 8 languages |
| **Reset Button** | Restore original code template for selected language |
| **Run Button** | UI ready (implementation pending) |
| **Submit Button** | UI ready (implementation pending) |
| **Syntax Highlighting** | Full Monaco Editor features |
| **Auto-complete** | IntelliSense support for all languages |

## 📁 Project Structure

```
leetcode-editor/
├── public/                       # Static assets
├── src/
│   ├── components/
│   │   ├── ProblemView.jsx      # Main problem view with editor
│   │   └── ProblemView.css      # Component-specific styles
│   ├── utils/
│   │   └── problemsData.js      # Problem loading & caching logic
│   ├── App.jsx                  # Router setup & problem list loading
│   ├── App.css                  # App-level styles
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── start.bat                   # Windows quick-start script
└── README.md                   # This file

../problems/                     # 2900+ LeetCode problems (JSON)
├── 0001-two-sum.json
├── 0002-add-two-numbers.json
├── 0003-longest-substring...json
└── ...
```

## 🔧 Key Components

### `App.jsx`
- Initializes React Router
- Loads all 2900+ problems on startup using eager imports
- Builds problem list cache for instant access
- Handles routing: `/` → `/1` and `/:problemId` → `<ProblemView>`

### `ProblemView.jsx`
Main component that renders:
- **Header**: Logo, Problem List button, Premium button
- **Problem List Dropdown**: Scrollable list of first 100 problems
- **Left Panel**: 
  - Tabs (Description / Solution)
  - Problem title, difficulty, topics
  - Examples with expected output
  - Constraints
- **Right Panel**:
  - Language selector dropdown
  - Monaco Editor with full syntax highlighting
  - Action buttons (Reset, Run, Submit)

### `problemsData.js`
- Uses Vite's `import.meta.glob()` to eagerly load all problem JSONs
- Builds an in-memory cache mapping problem IDs to data
- Provides `getProblem(id)` and `getAllProblems()` functions
- Ensures instant problem switching without network requests

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **React Router DOM** | Client-side routing | 6.30.3 |
| **Monaco Editor** | Code editor (VS Code engine) | 4.6.0 |
| **Vite** | Build tool & dev server | 5.0.8 |
| **CSS3** | Styling (no frameworks) | - |

## 🎨 Features Showcase

### 1. Problem Navigation
- Direct URL access: Just type `/42` to jump to problem 42
- Back/Forward browser buttons work seamlessly
- Shareable problem links

### 2. Multi-Language Support
Switch between languages and see:
- Language-specific code templates
- Proper syntax highlighting
- Appropriate Monaco language mode (JavaScript, Python, Java, etc.)

### 3. Professional UI
- Dark theme matching LeetCode
- Color-coded difficulty badges
- Topic tags for each problem
- Clean, organized layout
- Smooth animations and transitions

### 4. Problem Data
Each problem includes:
- Full description
- Multiple examples with explanations
- Constraints
- Solution article (when available)
- Code templates for 8+ languages

## 🚧 Possible Enhancements for AI Interviewer

- [ ] **Code Execution** - Integrate Judge0 or similar API to run/test code
- [ ] **Copy/Paste Restrictions** - Prevent cheating during interviews
  - Disable Ctrl+V in Monaco Editor
  - Log paste attempts for integrity monitoring
- [ ] **Test Case Validation** - Run user code against hidden test cases
- [ ] **Code Submission Tracking** - Store user solutions with timestamps
- [ ] **Local Storage** - Auto-save code progress
- [ ] **Search & Filter** - Find problems by title, difficulty, or topic
- [ ] **Timer** - Track time spent on each problem
- [ ] **AI Hints** - Provide contextual hints based on user's code
- [ ] **Video Recording** - Record coding sessions for review
- [ ] **Webcam Monitoring** - Proctoring features
- [ ] **Analytics Dashboard** - Track user performance metrics

## 📝 Notes

- Problem data is loaded **eagerly** on app startup for instant access
- All 2900+ problems are cached in memory
- No backend required - fully client-side application
- Problems are loaded from `../problems/*.json` relative to the editor
- Monaco Editor provides the same experience as VS Code

## 🐛 Known Limitations

- Problem list dropdown shows only first 100 problems (performance)
- No search functionality yet
- Run/Submit buttons are UI-only (not functional)
- Solutions may contain HTML formatting that needs proper rendering

- [ ] Add code execution functionality
- [ ] Add test case validation
- [ ] Save code locally (localStorage)
- [ ] Add search in problem list
- [ ] Add problem filtering by difficulty/topic
- [ ] Add solution submission tracking

## Notes

- All problem data is loaded from JSON files in the `problems/` folder
- Problems are loaded dynamically based on the URL parameter
- The editor automatically loads the appropriate code template for each language

## 📜 Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Windows users:** Simply run `start.bat` to automatically install dependencies and start the server!

## 🔗 Related Files

- **Full Setup Guide**: See `SETUP_COMPLETE.md` for detailed setup instructions
- **Problems Data**: Located in `../problems/` directory (2900+ JSON files)
- **Git Ignore**: Configured in `.gitignore` to exclude `node_modules`

## 📄 License

This project is a proof-of-concept for educational purposes. LeetCode problems and data belong to LeetCode LLC.

## 🤝 Contributing

This is a POC project. Feel free to fork and adapt for your AI Interviewer platform!

## 📧 Contact

For questions about this POC or the AI Interviewer project, please reach out.

---

**Built with ❤️ for AI Interviewer Feasibility Analysis**
