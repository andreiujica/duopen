# CollabSocketService

CollabSocketService is a real-time collaboration microservice utilizing WebSockets.

## Events

### 1. `code-change`
- **Purpose**: Emitted when a user changes the code.
- **Payload**:
  - `code`: The changed code.
  - `room`: The room in which the change occurred.
- **Response**: `code-update` event to other users in the room with the updated code.

### 2. `create-room`
- **Purpose**: Emitted when a user wants to create a room.
- **Response**: Returns the created room code to the client.

### 3. `join-room`
- **Purpose**: Emitted when a user wants to join a room.
- **Payload**:
  - `roomCode`: The room code.
- **Response**: Confirmation if the user has joined the room.

### 4. `leave-room`
- **Purpose**: Emitted when a user wants to leave a room.
- **Payload**:
  - `room`: The room code.
- **Response**: Confirmation if the user has left the room.

## Deployment

### Local Setup
1. Install dependencies with `npm install`.
2. Run the service with `npm start`.

### Docker
[Details on Docker deployment]

## Contributing

[Guidelines for contributions]

## License

[License details]
