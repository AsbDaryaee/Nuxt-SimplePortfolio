FROM node:lts-alpine

WORKDIR /src

# Install pnpm globally
RUN npm install -g pnpm

# Copy all files needed for both build and production
COPY package*.json ./
RUN pnpm i

COPY . .

# Set Nitro preset to node-cluster (environment variable)
ENV NITRO_PRESET=node-cluster

# Build the project within the same container
RUN pnpm run build

# Expose the necessary port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the server
CMD [ "node", ".output/server/index.mjs" ]

