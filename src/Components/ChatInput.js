import { useState} from 'react'

const ChatInput = ({ user, clickedUser, getUserMessages, getClickedUsersMessages }) => {
    const [textArea, setTextArea] = useState("")


    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="secondary-button" >Submit</button>
        </div>
    )
}

export default ChatInput