import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import { Message, MessageRaw } from '../types/Message';
import { chatUser, useChatType } from '../types/useChat';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const SOCKET_SERVER_URL = 'http://127.0.0.1:8000';

export const useChat = (roomId: string, user: chatUser): useChatType => {
  const [messages, setMessages] = useState<readonly Message[]>([]);
  const socket = socketIOClient(SOCKET_SERVER_URL, { query: { roomId } });

  useEffect(() => {
    socket.on(NEW_CHAT_MESSAGE_EVENT, (message: MessageRaw): void => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.user.email === user.email,
      };
      setMessages((messages: readonly Message[]) => [...messages, incomingMessage]);
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  const sendMessage = (messageBody: string): void => {
    socket.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      user,
    });
  };

  return { messages, sendMessage };
};
