# Use the official Node.js 18 alpine image for a leaner container size
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package configuration first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies if needed, but here we install all to safely compile
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript into JavaScript
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the compiled application perfectly matching production standards
CMD [ "npm", "start" ]
