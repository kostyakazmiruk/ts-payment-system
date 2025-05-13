# Dockerfile for Transaction Service

FROM node:20

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy all service code
COPY . .

# Generate Prisma client - using the correct path
RUN npx prisma generate --schema=./prisma/schema.prisma


# Expose the service port (adjust if needed)
EXPOSE 3002

# Start the service
CMD ["npm", "run", "start"]