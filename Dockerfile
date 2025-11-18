FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . . 

EXPOSE 3000

# Start the application, try a multistage build for production and the load balancer
CMD ["npm", "start"]