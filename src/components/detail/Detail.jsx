import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";
import { useNavigate } from "react-router-dom";


const Detail = () => {
  const { useNavigate, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

/*   const handleGoBack = () => {
      navigate("/dashboard");
    };

<button onClick={() => setShowChat(true)}>Access Chat</button> */


    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>A dedicated environmental specialist with extensive experience in sustainability and conservation projects. Proficient in environmental regulations, impact assessments, 
          and strategic planning.</p>
      </div>
      <div className="info">
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
        <button onClick={() => {
          setReturnToDashboard(true);
          setShowChat(false);
          setReturnToDashboard(false); // Add this line
}}>Return to Dashboard</button>
      </div>
    </div>
  );
};


export default Detail;
