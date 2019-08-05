module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection the the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })

    socket.on('add_message', message => {
      console.log('new message', message)
      socket.broadcast.emit('broadcasting_message', message)
    })
  })
}
