# -------- Stage 1: Build --------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# -------- Stage 2: Production Server --------
FROM node:18-alpine

WORKDIR /app

# Install a lightweight static server
RUN npm install -g serve

# Copy only the built output from the builder stage
COPY --from=builder /app/build ./build

EXPOSE 3000

# Serve the static build
CMD ["serve", "-s", "build", "-l", "3000"]
