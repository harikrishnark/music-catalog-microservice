# Music Catalog Backend Microservice

This is a robust, scalable backend microservice designed to serve as an API gateway for a simulated Headless CMS environment. It uses an enterprise-grade architecture specifically emphasizing logical data flow and deployment consistency.

## Tech Stack
*   **Backend Runtime:** Node.js
*   **Language:** TypeScript (Strict typing for robust data flow)
*   **Framework:** Express.js
*   **Containerization:** Docker
*   **Architecture:** Model-View-Controller (MVC)

## Features
1. **RESTful Architecture:** Implements standard API configurations for structured catalog manipulation and retrieval.
2. **Containerized Deployment:** Includes a multi-stage `Dockerfile` to seamlessly build and containerize the environment, eliminating "works on my machine" deployment inconsistencies.
3. **Strict Data Models:** Utilizes TypeScript Interfaces to establish rigid database structures (simulating MySQL tables) for seamless, bug-free data querying from downstream consuming services.

## Setup & Running Locally

Ensure you have Node.js and TypeScript installed on your system.

### Option 1: Standard Node Startup
1. Clone the repository
2. Install dependencies: `npm install`
3. Compile TypeScript: `npm run build`
4. Start the server: `npm start`

### Option 2: Docker Environment
1. Build the Docker Image: 
   `docker build -t music-catalog-microservice .`
2. Run the Container: 
   `docker run -p 3000:3000 music-catalog-microservice`

## API Endpoints Overview
*   `GET /api/v1/music/artists` : Fetches the entire directory of artists in the simulated CMS.
*   `GET /api/v1/music/artists/:id` : Fetches specific artist metrics integrated seamlessly with their total music catalog.
