import React, {useState, useCallback} from 'react'
import socket from '../../socket'


export default function NewMessage({dispatch, action}) {
  const [message, setMessage] = useState('')
  const onChangeMessage = useCallback((e) => {
    setMessage(e.target.value)
  }, [message])
  function sendMessage (e) {
    e.preventDefault()
    dispatch(action(message))
    socket.emit('add_message', message)
    setMessage('')
  }
  return (
    <form onSubmit={sendMessage}>
      <input value={message} onChange={onChangeMessage} />
      <button onClick={sendMessage} type="submit">Enviar</button>
    </form>
  )
}
