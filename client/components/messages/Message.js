import React from 'react'

export default function Message(props) {
  const messages = props.messages || []
  return messages.map((message, i) => {
    return <h4 key={i} >{message}</h4>
  })
}
