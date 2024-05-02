# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install the dependencies
RUN pnpm install

# Copy the next.config.js file
COPY next.config.js ./

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

# Set the command to start the Next.js server
CMD ["pnpm", "start"]

# docker build -t simulation .
# docker run -p 3000:3000 simulation