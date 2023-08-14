const onConnect = require('../events/onConnect');
const onCodeChange = require('../events/onCodeChange');
const onDisconnect = require('../events/onDisconnect');
const onCreateRoom = require('../events/onCreateRoom');
const onJoinRoom = require('../events/onJoinRoom');
const onLeaveRoom = require('../events/onLeaveRoom');
const onGetUsersInRoom = require('../events/onGetUsersInRoom');

module.exports.handleSocketConnection = (socket, io) => {
  onConnect(socket);
  onCodeChange(socket);
  onDisconnect(socket);
  onCreateRoom(socket);
  onJoinRoom(socket, io);
  onLeaveRoom(socket);
  onGetUsersInRoom(socket, io);
};
