import React, { useState, useEffect ,forwardRef  } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { Input ,FormControl,InputLabel ,IconButton  } from '@material-ui/core';
import Message from "./Message";
import FlipMove from 'react-flip-move';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userName = prompt("Enter the User Name");

    setUserName(userName);
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp","asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id:doc.id,
            userName: doc.data().userName,
            message: doc.data().message
          }))
        );
        var elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
      });
    console.log(messages);
  }, []);

  const messageList = (event) => {
    event.preventDefault();
    window.scrollTo(0, 999999999999);
    function scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    }
  window.onload = scrollToBottom;
    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: userName,
    });

   // setMessages([...messages, {userName:userName,message:input}]);
    setInput("");
   
    
  };

  return (
    <div className="App">
    
      <img style={{'padding-top':'10px'}} src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
    
        <h1>My Chat Application</h1>
        <h2>Welcome :{userName}</h2>
        <FlipMove className="messages__flip">
      {messages &&
        messages.map((message,index) => (
             
          <Message key={message.id} userName={userName} message={message}></Message>
          
        ))}
        </FlipMove>
        <div id="content" className="content__view">

          </div>

      <form className="app__form">
        
      <FormControl flex className="app__formcontrol">
          <InputLabel >Enter a Message</InputLabel>
          <Input className="app__input__text" placeholder="Enter a message..."
          value={input}
          onChange={(event) => setInput(event.target.value)}/>
         
          <IconButton  className="app__iconButton" disabled={!input} variant="outline" color="primary" type="submit" onClick={messageList}>
          <SendIcon ></SendIcon>
         
          </IconButton>
     
         
      </FormControl>
      
      {/* <div flex className="app_input"> */}
        {/* <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {/* <button type="submit" onClick={messageList}>
          Send Message
        </button> */}
       
        {/* <SendIcon disabled={!input} variant="outline" color="variant" type="submit" onClick={messageList}>Send Message</SendIcon>
       */}
        {/* </div>  */}
      </form>
    </div>
  );
}

export default App;
