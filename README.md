# SupportSphere ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Project Description
SupportSphere is an intelligent customer support platform that leverages AI to analyze customer queries and prioritize support tickets in real-time. By integrating a dynamic knowledge base, it provides agents with contextual suggestions, enhancing response efficiency and customer satisfaction.

## Features
- 🤖 AI-driven customer query analysis
- ⏱️ Real-time support ticket prioritization
- 📚 Integrated knowledge base suggestions

## Tech Stack
### Frontend
- **Next.js** 🌐

### Backend
- **Node.js** 🚀
- **OpenAI Agent SDK** 🤖

### Database
- **PostgreSQL** 🗄️
- **Prisma** 🔗

### Caching
- **Redis** 🧊

## Installation
To set up the project locally, follow these steps:

- Clone the repository
bash
git clone https://github.com/arun-kumar-codes/supportsphere.git
- Navigate to the project directory
bash
cd supportsphere
- Install dependencies
bash
npm install
- Set up the database
bash
npx prisma migrate dev
- Start the development server
bash
npm run dev
## Usage
Once the server is running, you can access the application at `http://localhost:3000`. Follow the on-screen instructions to interact with the AI-driven support features.

## API Documentation
For detailed API documentation, please refer to the [API Docs](https://github.com/arun-kumar-codes/supportsphere/wiki/API-Documentation).

## Testing
To run the tests for this project, use the following command:
bash
npm test
## Deployment
To deploy the application, follow these steps:

- Build the application
bash
npm run build
- Start the production server
bash
npm start
- Ensure your environment variables are set correctly for production.

## Contributing
We welcome contributions! Please follow these guidelines:

- Fork the repository
- Create a new branch for your feature or bug fix
- Commit your changes
- Push to your branch
- Open a pull request

For more details, please refer to our [Contributing Guidelines](https://github.com/arun-kumar-codes/supportsphere/blob/main/CONTRIBUTING.md). 

Thank you for your interest in SupportSphere! 🚀