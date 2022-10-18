export default (io, socket) => {
  const createdMessage = (msg) => {
    console.log(msg.toUser);
  };

  socket.on("send-message", (msg) => {
    socket.to(msg.toUser).emit("reveice-message", msg);
  });
};
