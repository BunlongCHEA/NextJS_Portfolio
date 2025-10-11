# Use Node.js 24 Alpine as base image
FROM node:24-alpine AS builder

# Install dependencies only when needed
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies, if production, use --only=production
# This install ALL dependencies (including devDependencies like vite)
RUN npm ci

# Copy source code
COPY . .

# Set environment variables
# Tells Node.js and Next.js that this is a production environment:
    # Enables production optimizations (minification, compression)
    # Disables development-only features and warnings
ENV NODE_ENV production

# Disables Next.js anonymous telemetry data collection: 
    # Prevents Next.js from sending usage statistics to Vercel
    # Stops collecting anonymous performance and feature usage data
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Production image, copy all the files and run nginx
FROM nginx:alpine

# Set environment variables for production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy built files to nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]