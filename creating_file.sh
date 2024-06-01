#!/bin/bash



# Create backend structure
mkdir -p backend/{config,controllers,models,routes,services,utils}

# Create frontend structure
mkdir -p frontend/{css,js}

# Create main files
touch backend/config/db.js
touch backend/controllers/chatController.js
touch backend/models/Message.js
touch backend/routes/chatRoutes.js
touch backend/services/aiService.js
touch backend/utils/errorHandler.js
touch backend/app.js
touch backend/server.js
touch frontend/css/styles.css
touch frontend/js/main.js
touch frontend/index.html
touch .env
touch .gitignore
touch README.md

# Initialize npm and create package.json
cd backend
npm init -y

# Install necessary npm packages
npm install express mongoose dotenv body-parser axios

# Print a success message
echo "Project structure for convo  created successfully!"
