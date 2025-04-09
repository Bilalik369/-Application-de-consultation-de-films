
import React from "react"
import { ThemeProvider } from "./context/ThemeContext"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return React.createElement(ThemeProvider, null, React.createElement(AppRoutes, null))
}

export default App