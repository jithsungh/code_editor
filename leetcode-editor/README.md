# LeetCode Editor POC

A professional web-based code editor that mimics LeetCode's interface, built with React and Monaco Editor.

## Features

✅ **Problem Navigation** - Navigate to any problem using URL: `localhost:5173/<problem-id>`
✅ **Problem List Dropdown** - Click "Problem List" button to see all available problems
✅ **Multi-Language Support** - JavaScript, Python3, Java, C++, TypeScript, Go, Rust, C#
✅ **Monaco Editor** - Professional VS Code-style code editor
✅ **Dark Theme** - Professional dark mode matching LeetCode's design
✅ **Split Panel Layout** - Problem description on left, code editor on right
✅ **Tabs** - Switch between Description and Solution
✅ **Responsive Design** - Works on different screen sizes

## Installation & Setup

### Prerequisites
Make sure you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org/)

### Steps

1. **Install dependencies:**
   ```bash
   cd c:\Users\jithsungh.v\projects\leetcode-problems\leetcode-editor
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:5173
   ```

## Usage

### Navigate to Specific Problems

- **Home page**: `http://localhost:5173/` (redirects to problem 1)
- **Specific problem**: `http://localhost:5173/2` (loads problem 2)
- **Any problem**: `http://localhost:5173/<problem-id>`

### Using the Problem List

1. Click the **"Problem List"** button in the header
2. Browse through all available problems
3. Click on any problem to navigate to it
4. The URL will update automatically

### Features in the Editor

- **Language Selector**: Dropdown to switch between programming languages
- **Reset Button**: Reset code to the original template
- **Run Button**: (UI only - ready for future implementation)
- **Submit Button**: (UI only - ready for future implementation)

## Project Structure

```
leetcode-editor/
├── src/
│   ├── components/
│   │   ├── ProblemView.jsx       # Main problem view component
│   │   └── ProblemView.css       # Styles for problem view
│   ├── utils/
│   │   └── problemLoader.js      # Problem loading utilities
│   ├── App.jsx                   # Main app with routing
│   ├── App.css                   # App styles
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── problems/                     # All problem JSON files
├── index.html
├── package.json
└── vite.config.js
```

## Key Components

### App.jsx
- Sets up React Router
- Loads the complete list of problems on startup
- Provides routing for `/` and `/:problemId`

### ProblemView.jsx
- Displays problem description, examples, and constraints
- Monaco Editor integration for code editing
- Language selection and code management
- Problem list dropdown for easy navigation

## Technologies Used

- **React 18** - UI framework
- **React Router DOM** - Routing
- **Monaco Editor** - Code editor (same as VS Code)
- **Vite** - Build tool and dev server

## Future Enhancements

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
