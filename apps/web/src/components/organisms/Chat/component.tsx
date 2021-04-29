import Cookies from 'js-cookie';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';

import { useChat } from './hooks/useChat';

export const Chat: FC = () => {
  const firstName = Cookies.get('firstName') || '';
  const lastName = Cookies.get('lastName') || '';
  const email = Cookies.get('email') || '';
  const user = { firstName, lastName, email };
  const { messages, sendMessage } = useChat('live', user);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewMessage(event.target.value);
  }, []);

  const handleSendMessage = useCallback(
    (event): void => {
      if (event.keyCode === 13 && event.shiftKey === false) {
        event.preventDefault();
        sendMessage(newMessage);
        setNewMessage('');
      }
    },
    [newMessage, sendMessage],
  );

  return (
    <div
      style={{
        height: '600px',
        width: '100%',
        border: '1px solid black',
        borderRadius: 10,
        flexBasis: '0%',
        fontFamily: 'sans-serif',
      }}
      className="ml-5 px-0 d-flex flex-column flex-grow-1 flex-shrink-1"
    >
      <div
        style={{
          overflow: 'hidden auto',
          flexBasis: '0%',
          backgroundColor: 'rgb(206, 163, 255)',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        className="
          d-flex
          flex-grow-1
          flex-shrink-1
        "
      >
        <ul
          style={{ width: '100%', overflow: 'hidden auto', listStyleType: 'none' }}
          className="d-block px-1"
        >
          {messages.map((message, i) => (
            <li key={i} className="d-block my-3">
              <div style={message.ownedByCurrentUser ? {} : {}}>
                <div
                  style={{
                    color: '#000',
                    opacity: '0.5',
                    marginTop: '5px',
                    marginLeft: '5px',
                    width: '100%',
                    fontSize: '11px',
                  }}
                >
                  {`${message.user.firstName} ${message.user.lastName}`}
                </div>
                <div
                  style={{
                    color: '#000',
                    borderRadius: '12px',
                    maxWidth: '218px',
                    fontSize: '15px',
                    textAlign: 'left',
                    padding: '5px 10px',
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,.08)',
                    marginLeft: '0',
                  }}
                >
                  {message.body}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          borderTop: '1px solid black',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        className="py-3 px-3 d-flex justify-content-center"
      >
        <textarea
          style={{
            resize: 'none',
            width: '100%',
            height: '50px',
            padding: '11px',
            fontSize: '14px',
            lineHeight: '16px',
            minHeight: 0,
            transition: 'box-shadow .2s ease-in-out',
            color: 'rgba(0,0,0,.9)',
            border: 'none !important',
            outline: 'none !important',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
          rows={2}
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyDown={handleSendMessage}
          placeholder="Введите сообщение"
          maxLength={50}
        />
      </div>
    </div>
  );
};
