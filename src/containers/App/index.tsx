import { useState } from "react";
import { Button, ItemChat } from "@components";
import { CHATS_MOCK } from "../../mocks";
import "./styles.css";

function App() {
  return (
    <>
      {CHATS_MOCK.map(
        (
          { urlImage, username, message, dateLastMessage, quantityMessages },
          index
        ) => (
          <ItemChat
            key={`${index}-${username}`}
            urlImage={urlImage}
            username={username}
            message={message}
            date={dateLastMessage}
            quantityMessages={quantityMessages}
          />
        )
      )}
    </>
  );
}

export default App;
