import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { projects as projectsData } from "./data";
// import { useState } from "react";
import useLocalStorage from './components/useLocalStorage';
// import Error from "./pages/Error";
import './App.css';

function App() {
    const [theme, setTheme] = useLocalStorage<string>("theme", "dark");

    const changeTheme = () => {
        setTheme((prev: string) => prev === "dark" ? "light" : "dark");
    }

    const router = createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={ <Layout theme={ theme } changeTheme={ changeTheme }  /> }>
              <Route index element={ <Home /> } />
              <Route path="about" element={ <About /> } />
              <Route path="projects" element={ <Projects projects= { projectsData } /> } />
              <Route path="contact" element={ <Contact /> } />
          </Route>
    ))

    return (
      <>
          <RouterProvider router={ router } />
      </>
    )
}

export default App
