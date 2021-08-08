exports.ids = [18];
exports.modules = {

/***/ "M0hv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ Chat; });

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// CONCATENATED MODULE: ./src/components/organisms/Chat/hooks/useChat.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const SOCKET_SERVER_URL = 'http://127.0.0.1:8000';
const useChat = (roomId, user) => {
  const {
    0: messages,
    1: setMessages
  } = Object(external_react_["useState"])([]);
  const socket = external_socket_io_client_default()(SOCKET_SERVER_URL, {
    query: {
      roomId
    }
  });
  Object(external_react_["useEffect"])(() => {
    socket.on(NEW_CHAT_MESSAGE_EVENT, message => {
      const incomingMessage = _objectSpread(_objectSpread({}, message), {}, {
        ownedByCurrentUser: message.user.email === user.email
      });

      setMessages(messages => [...messages, incomingMessage]);
    });
    return () => {
      socket.disconnect();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  const sendMessage = messageBody => {
    socket.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      user
    });
  };

  return {
    messages,
    sendMessage
  };
};
// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// CONCATENATED MODULE: ./src/components/organisms/Chat/component.tsx
var __jsx = external_react_default.a.createElement;




const Chat = () => {
  const firstName = external_js_cookie_default.a.get('firstName') || '';
  const lastName = external_js_cookie_default.a.get('lastName') || '';
  const email = external_js_cookie_default.a.get('email') || '';
  const user = {
    firstName,
    lastName,
    email
  };
  const {
    messages,
    sendMessage
  } = useChat('live', user);
  const {
    0: newMessage,
    1: setNewMessage
  } = Object(external_react_["useState"])('');
  const handleNewMessageChange = Object(external_react_["useCallback"])(event => {
    setNewMessage(event.target.value);
  }, []);
  const handleSendMessage = Object(external_react_["useCallback"])(event => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      sendMessage(newMessage);
      setNewMessage('');
    }
  }, [newMessage, sendMessage]);
  return Object(core_["jsx"])("div", {
    style: {
      height: '600px',
      width: '100%',
      border: '1px solid black',
      borderRadius: 10,
      flexBasis: '0%',
      fontFamily: 'sans-serif'
    },
    className: "ml-5 px-0 d-flex flex-column flex-grow-1 flex-shrink-1"
  }, Object(core_["jsx"])("div", {
    style: {
      overflow: 'hidden auto',
      flexBasis: '0%',
      backgroundColor: 'rgb(206, 163, 255)',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    className: " d-flex flex-grow-1 flex-shrink-1 "
  }, Object(core_["jsx"])("ul", {
    style: {
      width: '100%',
      overflow: 'hidden auto',
      listStyleType: 'none'
    },
    className: "d-block px-1"
  }, messages.map((message, i) => Object(core_["jsx"])("li", {
    key: i,
    className: "d-block my-3"
  }, Object(core_["jsx"])("div", {
    style: message.ownedByCurrentUser ? {} : {}
  }, Object(core_["jsx"])("div", {
    style: {
      color: '#000',
      opacity: '0.5',
      marginTop: '5px',
      marginLeft: '5px',
      width: '100%',
      fontSize: '11px'
    }
  }, `${message.user.firstName} ${message.user.lastName}`), Object(core_["jsx"])("div", {
    style: {
      color: '#000',
      borderRadius: '12px',
      maxWidth: '218px',
      fontSize: '15px',
      textAlign: 'left',
      padding: '5px 10px',
      background: '#fff',
      border: '1px solid rgba(0,0,0,.08)',
      marginLeft: '0'
    }
  }, message.body)))))), Object(core_["jsx"])("div", {
    style: {
      borderTop: '1px solid black',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
    className: "py-3 px-3 d-flex justify-content-center"
  }, Object(core_["jsx"])("textarea", {
    style: {
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
      overflow: 'hidden'
    },
    rows: 2,
    value: newMessage,
    onChange: handleNewMessageChange,
    onKeyDown: handleSendMessage,
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
    maxLength: 50
  })));
};
// CONCATENATED MODULE: ./src/components/organisms/Chat/index.ts


/***/ })

};;