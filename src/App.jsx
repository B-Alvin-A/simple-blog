import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home, About, NewPost, PostPage, EditPost, Error404 } from "./pages"
import { DataProvider } from "./context/DataContext";

export default function App() {

  return (
    <div className="h-screen w-full flex flex-col items-center justify-start border border-solid border-[#333]">
      <Header title="React JS Blog" />
      <DataProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/editpost/:id" element={<EditPost  />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </DataProvider>
      <Footer />
    </div>
  )
}