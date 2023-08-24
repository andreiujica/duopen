# Duopen 🚀
Duopen is a collaborative coding sandbox designed for both teams and students looking to code together in real-time. Whether you're brainstorming ideas, prototyping, or learning together, Duopen offers an integrated environment tailored for collaboration.

![imgonline-com-ua-twotoone-VqBSUuuoxfPa](https://github.com/andreiujica/duopen/assets/46849514/08b46d77-07d5-402b-a8c8-ec53d6d67063)



# Features
- **Collaborative Coding:** Real-time code collaboration that brings your ideas to life seamlessly.
- **Chat Integration:** Communicate effortlessly with integrated chat.
- **Whiteboard:** Visualize and brainstorm with the built-in whiteboard.
- **Instant Code Preview:** See your code in action with live previews.
- **Room Support:** Create or join rooms and collaborate.
- **Theme Support:** Switch between dark and white themes based on your preference.

# Getting Started
## Prerequisites
Ensure you have Node.js 20 and Yarn installed.

## Setup
Clone the repository:
```bash
git clone https://github.com/andreiujica/duopen.git
```
## Set up environment variables:

For the client, create a .env file and add:

```bash
# By default for local development, this should be localhost:8000
SOCKET_URL=your_server_service_path
```

For the server, create a .env file and add:

```bash
# By default for local development, this should be 8000
PORT=your_server_service_port
# By default, for local development, this should be localhost:3000
CORS_ORIGIN=your_frontend_service_path
```
Install dependencies and start the services:

For both client and server:
```bash
yarn install
yarn dev
```

## Built With
- **Socket.io** - Real-time communication
- **Nuxt 3** - Frontend framework
- **Express.js** - Backend framework
- **Tailwind CSS** - Styling framework
- **Nuxt UI** - UI component library

## Contributing
Feel free to fork the repository and submit a pull request for any bugs, improvements, or features you think should be added. Your contributions are highly appreciated!

## Support
Encountered an issue or have questions? Open a GitHub issue and we'll be glad to help.

## License
This project is licensed under the MIT License.

