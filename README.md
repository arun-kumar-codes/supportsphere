# SupportSphere Application Launch

## Getting Started

This document outlines the steps to launch the SupportSphere application and monitor for any immediate issues post-launch.

### Prerequisites

- Node.js installed
- PostgreSQL database set up
- Redis server running
- Prisma set up and migrated
- OpenAI Agent SDK installed

### Installation

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd support-sphere

3. Install dependencies:
   npm install

4. Set up environment variables in a `.env` file:
   DATABASE_URL=postgresql://user:password@localhost:5432/supportsphere
   REDIS_URL=redis://localhost:6379
   OPENAI_API_KEY=your_openai_api_key

### Launching the Application

To launch the application, run the following command:

npm run dev

### Monitoring

After launching, monitor the application for any issues. You can check the logs for errors:

npm run logs

### Troubleshooting

If you encounter any issues, check the following:

- Ensure the PostgreSQL and Redis services are running.
- Verify the database connection string in the `.env` file.
- Check for any migration issues with Prisma.

### Contributing

If you would like to contribute, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.