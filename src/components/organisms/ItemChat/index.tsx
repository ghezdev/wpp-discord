import React from "react";
import { getMessageSent } from "@utils";
import "./styles.css";

type ButtonProps = {
  urlImage: string;
  username: string;
  message: string;
  date: string;
  quantityMessages: number;
};

const ItemChat = ({
  urlImage,
  username,
  message,
  date,
  quantityMessages,
}: ButtonProps): JSX.Element => {
  return (
    <div className="item-chat">
      <img className="image" src={encodeURI(urlImage)} width="50" />
      <div className="information">
        <div className="content">
          <p className="user-name">{username}</p>
          <p className="date">{`sent ${getMessageSent(date)}`}</p>
        </div>
        <div className="content">
          <p className="message">{message}</p>
          {quantityMessages > 0 && (
            <div className="quantity-messages">{quantityMessages}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemChat;
