
# Fuji Autosale

## Table of Contents

- [Project Overview](#project-overview)
- [Client-side (React Native App)](#client-side-react-native-app)
	- [Folder Structure](#folder-structure)
	- [Installation](#installation)
	- [Scripts](#scripts)
	- [Dependencies](#dependencies)
	- [TypeScript Configuration](#typescript-configuration)
	- [Environment Setup](#environment-setup)
	- [Development Guidelines](#development-guidelines)
	- [Husky Setup](#husky-setup)
	- [Pull Request Template](#pull-request-template)
- [Backend-side (Node.js Server)](#backend-side-nodejs-server)
	- [Folder Structure](#folder-structure-1)
	- [Installation](#installation-1)
	- [Scripts](#scripts-1)
	- [Dependencies](#dependencies-1)
	- [Environment Setup](#environment-setup-1)
	- [Development Guidelines](#development-guidelines-1)
	- [Pull Request Template](#pull-request-template-1)

## Project Overview

**Fuji Autosale** is a full-stack e-commerce application consisting of a **React Native** mobile app and a **Node.js** backend. This project is designed to ensure scalability, maintainability, and ease of use with technologies like TypeScript, React Navigation, Express.js, and MongoDB. The client side (React Native app) communicates with the backend to fetch and manage data.

## Client-side (React Native App)

### Folder Structure

The React Native app follows a modular folder structure:

- **src**: Main source code directory.
	- **assets**: Contains images, fonts, and other static resources.
	- **components**: Reusable UI components.
	- **constants**: Application-wide constants.
	- **hooks**: Custom React hooks.
	- **implementations**: Service or business logic implementations.
	- **navigation**: Navigation structure and screens.
	- **providers**: Context providers for state management.
	- **screens**: Main screens of the app.
	- **services**: API service files.
	- **styles**: Global styling files.
	- **types**: TypeScript type definitions.
	- **ui-modules**: Shared UI components.
	- **utils**: Utility functions and helpers.

### Installation

1. Clone the repository:

	 ```bash
	 git clone <repository-url>
	 cd FujiAutosale
	 ```

2. Install dependencies:

	 ```bash
	 yarn install
	 ```

3. For iOS, install CocoaPods dependencies:

	 ```bash
	 yarn pod
	 ```

### Scripts

- **Start the Metro bundler**: `yarn start`
- **Run on Android**: `yarn android`
- **Run on iOS**: `yarn ios`
- **Lint**: `yarn lint`
- **Run Tests**: `yarn test`
- **Generate APK**: `yarn apk`
- **Generate AAB**: `yarn aab`
- **Archive for iOS**: `yarn archive-ios`

### Dependencies

List of key dependencies for the React Native app:
- **@react-navigation**: Navigation solution.
- **axios**: HTTP client for making API requests.
- **react-native-fast-image**: Optimized image component.
- **react-native-reanimated**: For animations.
- **lottie-react-native**: For Lottie animations.
- **typescript**: For type safety.

### Development Guidelines

- Use TypeScript for type safety.
- Follow the coding standards (linting rules).
- Use **React Navigation** for app navigation.
- Implement **Reanimated** and **Lottie** for animations.
- Write unit tests and use Jest for testing.

## Backend-side (Node.js Server)

### Folder Structure

The backend server follows this folder structure:

- **src**: Main source code directory.
	- **controllers**: Handle API requests and responses.
	- **models**: Database models.
	- **routes**: API route definitions.
	- **services**: Business logic or external services (e.g., payment, email).
	- **middlewares**: Custom middleware functions.
	- **config**: Configuration files (e.g., environment variables, database config).
	- **utils**: Utility functions.
	- **tests**: Unit tests for the backend.

### Installation

1. Clone the repository:

	 ```bash
	 git clone <repository-url>
	 cd FujiAutosale
	 ```

2. Install dependencies:

	 ```bash
	 npm install
	 ```

3. Set up environment variables:

	 - Create a `.env` file in the root directory.
	 - Add your configuration values (e.g., database connection strings, API keys).

### Scripts

- **Start the server**: `npm run dev`
- **Run tests**: `npm run test`
- **Lint**: `npm run lint`
- **Generate TypeScript types**: `npm run generate-types`
- **Run migrations**: `npm run migrate`

### Dependencies

- **express**: Fast, unopinionated web framework.
- **mongoose**: MongoDB object modeling tool.
- **dotenv**: Loads environment variables from `.env` file.
- **jsonwebtoken**: For handling JWT tokens.
- **bcryptjs**: For hashing passwords.

### Development Guidelines

- Use TypeScript for type safety.
- Organize the code into MVC (Model-View-Controller) architecture.
- Follow RESTful API design principles.
- Use JWT for authentication and authorization.
- Write unit tests using **Jest** and **supertest** for API testing.

## Pull Request Template

Here’s a unified **Pull Request template** you can use for both client and backend PRs:

### Description

Provide a concise summary of the changes you've made.

### Task Link

Link to the related task ticket (e.g., [Task Link](https://your-task-link.com)).

### Type of Change

- [ ] Bug fix
- [ ] Feature enhancement
- [ ] New feature
- [ ] Refactoring
- [ ] Documentation update
- [ ] Other (Please describe):

### Checklist

- [ ] I have tested my changes locally.
- [ ] I have updated the documentation (if applicable).
- [ ] I have added necessary tests (if applicable).
- [ ] All tests pass (if applicable).
- [ ] The code follows the repository's style guide.

## Conclusion

Consolidating your documentation into one root `README.md` provides clarity and accessibility. It offers one source of truth for developers, reducing confusion and ensuring consistency. Additionally, contributors will have a better understanding of the entire project (both frontend and backend) without having to look in multiple places.
