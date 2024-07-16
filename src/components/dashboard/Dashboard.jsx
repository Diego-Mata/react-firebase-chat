import React from 'react'
import NavigationBar from './NavigationBar'
import TabBar from './TabBar'
import Post from './Post'
import "./Dashboard.css"

const Dashboard = ({ setShowChat }) =>{
  return (
    <div className="dashboard">
      <NavigationBar />
      <TabBar />
      <div className="content-area">
        <Post />
        <button onClick={() => setShowChat(true)}>Access Chat</button>
        <Post />
        <button onClick={() => setShowChat(true)}>Access Chat</button>
        {/* Add more posts here */}
        
      </div>
    </div>
  )
}

export default Dashboard;
