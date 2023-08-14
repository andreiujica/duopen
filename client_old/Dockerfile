# Use the official Node.js LTS image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Nuxt app for production
RUN npm run build

# Set the environment variable for HOST to ensure the application can be accessed from outside the container
ENV HOST 0.0.0.0

# Expose port 3000 for the application
EXPOSE 8000

# Command to run the application
CMD ["npm", "start"]
