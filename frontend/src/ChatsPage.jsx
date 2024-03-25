import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('a7dc5df6-ace9-499d-88e7-e81f7b672f99', props.user.username, props.user.secret)
    return (
      <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
      </div>
    )
  };
  export default ChatsPage;