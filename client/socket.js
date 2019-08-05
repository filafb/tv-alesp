import io from 'socket.io-client'

const socket = io('https://b0ae753b.ngrok.io')

socket.on('connect', () => {
  console.log('Im in the party')
})

export default socket
