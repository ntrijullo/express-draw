module.exports = (io) => {
    var data = []
    var users = 1
    io.on('connection',(socket)=>{

        for (let i = 0; i < data.length; i++) {
            io.emit('show_drawing', data[i])
            
        }

        io.emit('users', users+1)

        socket.on('drawing', (drawing)=>{
            data.push(drawing)
            io.emit('show_drawing', drawing)
            
        })

        socket.on('delete',()=>{
            data =[]
            io.emit('show_drawing', null)
        })

        socket.on('disconnect',()=>{
            io.emit('users', users-1)
    
        })
    })

}