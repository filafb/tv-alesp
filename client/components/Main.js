import React, { useReducer, useEffect } from 'react'
import ReactPlayer from 'react-player'
import Message from './messages/Message'
import NewMessage from './messages/NewMessage'
import socket from '../socket'

const UPDATE = 'update'

const initialState = []



function messageReducer(state, action) {
  switch (action.type) {
    case UPDATE:
      return [...state, action.message]

    default:
      return state
  }
}

function updateMessage(message) {
  return {
    type: UPDATE,
    message
  }
}

export default function Main() {
  const [messages, updateMessages] = useReducer(messageReducer, initialState)
  useEffect(() => {
    socket.on('broadcasting_message', (message) => updateMessages(updateMessage(message)))
  },[])
  return (
    <React.Fragment>
      <ReactPlayer url='https://www.youtube.com/watch?v=rptia9mhI4o' playing />
      <Message messages={messages} />
      <NewMessage dispatch={updateMessages} action={updateMessage} />
    </React.Fragment>
  )
}
