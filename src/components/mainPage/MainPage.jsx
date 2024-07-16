import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="brand">Brand Name</div>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Notifications</a>
        <a href="#">Messages</a>
        <a href="#">Bookmarks</a>
        <a href="#">Lists</a>
        <a href="#">Profile</a>
        <button>Tweet</button>
      </div>
    </nav>
  )}

export default Navbar;