import React, { useState, useEffect } from 'react';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import Dashboard from './components/dashboard/Dashboard';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import { useChatStore } from './lib/chatStore';

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();
  const [showChat, setShowChat] = useState(false);
  const [returnToDashboard, setReturnToDashboard] = useState(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        showChat ? (
          returnToDashboard ? (
            <Dashboard setShowChat={setShowChat} />
          ) : (
            <>
              {chatId && <Detail /> }
              {chatId && <Chat />}
              <List />
              <button style={{
      fontSize: '12px', // adjust font size
      padding: '4px 8px', // adjust padding
      borderRadius: '4px', // add rounded corners
      backgroundColor: '#fff', // change background color
      borderColor: '#ddd', // change border color
      borderWidth: '1px', // change border width
      cursor: 'pointer', // add pointer cursor
    }} onClick={() => {
  setReturnToDashboard(true);
  setShowChat(false);
  setReturnToDashboard(false); // Add this line
}}>Return to Dashboard</button>
            
            </>
          )
        ) : (
          <Dashboard setShowChat={setShowChat} />
        )
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;

/* 
<>
  {chatId && (
    <div>
      <Detail />
      <div
        style={{
          marginTop: '16px', // add some margin top
          textAlign: 'right', // align the button to the right
        }}
      >
        <button
          style={{
            fontSize: '12px',
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: '1px',
            cursor: 'pointer',
          }}
          onClick={() => setReturnToDashboard(true)}
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  )}
  {chatId && <Chat />}
  <List />
</>
*/