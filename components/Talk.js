import React, { useContext, useState, useEffect } from "react";

import { Text, View, Dimensions } from "react-native";

import { GiftedChat } from "react-native-gifted-chat";
/// -> hooks
import UserContext from "../hooks/UserContext";

import bot from "../assets/img/walle.jpg";

const width = Dimensions.get("window").width;

const Talk = () => {
  const { isUser, username, setUsername } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(
    () =>
      setMessages([
        {
          _id: 1,
          text: `Hello ${username}`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar:
              "https://images-na.ssl-images-amazon.com/images/I/61sq8KVoQNL._SX425_.jpg"
          }
        }
      ]),
    []
  );
  const onSend = newMessages => {
    console.log(bot);
    const messagesList = newMessages.concat([
      {
        _id: Math.random(),
        text: `Hello ${username}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar:
            "https://images-na.ssl-images-amazon.com/images/I/61sq8KVoQNL._SX425_.jpg"
        }
      }
    ]);
    setMessages(messages.concat(messagesList));
  };

  return (
    <GiftedChat
      style={{ flex: 1, width: width }}
      messages={messages}
      onSend={newessages => {
        onSend(newessages);
      }}
      user={{
        _id: 1,
        name: { username }
      }}
    />
  );
};

export default Talk;
