# GShop

This is a React Native project named **GShop**.

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [TypeScript Configuration](#typescript-configuration)
- [Environment Setup](#environment-setup)
- [Development Guidelines](#development-guidelines)
- [Husky Setup](#husky-setup)

## Project Overview

**GShop** is a mobile application built with React Native. The project is organized to ensure scalability, maintainability, and ease of use. It leverages TypeScript for static type checking, React Navigation for navigation, and various other libraries for state management, animations, and API calls.

## Folder Structure

Here's the main folder structure:

- **src**: Main source code directory.
  - **assets**: Contains images, fonts, and other static resources.
  - **components**: Reusable UI components.
  - **constants**: Application-wide constants.
  - **hooks**: Custom React hooks.
  - **implementations**: Contains service or business logic implementations.
  - **navigation**: Handles navigation structure and screens.
  - **providers**: Context providers for state management.
  - **screens**: Main screens of the app.
  - **services**: API service files.
  - **styles**: Global styling files.
  - **types**: TypeScript type definitions.
  - **ui-modules**: UI modules or shared UI components.
  - **utils**: Utility functions and helpers.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd GShop
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. For iOS, install CocoaPods dependencies:

   ```bash
   yarn pod
   ```

## Scripts

- **Start the Metro bundler**: `yarn start`
- **Run on Android**: `yarn android`
- **Run on iOS**: `yarn ios`
- **Lint**: `yarn lint`
- **Run Tests**: `yarn test`
- **Generate APK**: `yarn apk`
- **Generate AAB**: `yarn aab`
- **Archive for iOS**: `yarn archive-ios`

## Dependencies

### Main Dependencies

- **@react-native-async-storage/async-storage**: Storage solution for React Native.
- **@react-navigation**: Navigation solution for React Native.
- **@shopify/react-native-skia**: High-performance 2D graphics.
- **axios**: Promise-based HTTP client for making API requests.
- **react-native-fast-image**: Optimized image component.
- **react-native-reanimated**: Declarative animations and interactions.
- **lottie-react-native**: Lottie animations.

### Dev Dependencies

- **@babel/core**, **@babel/preset-env**, **@babel/runtime**: Babel configuration for React Native.
- **eslint**: Linter for code quality.
- **jest**: JavaScript testing framework.
- **typescript**: Type checking.

## TypeScript Configuration

The TypeScript configuration file (`tsconfig.json`) extends React Native's default configuration and includes the following options:

```json
{
  "extends": "@react-native/typescript-config/tsconfig.json",
  "compilerOptions": {
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "allowJs": true,
    "esModuleInterop": true,
    "jsx": "react-native",
    "lib": ["DOM", "ESNext"],
    "moduleResolution": "Bundler",
    "module": "esnext",
    "noEmit": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "target": "esnext",
    "useUnknownInCatchVariables": true,
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./src",
    "paths": {
      "@screens/*": ["screens/*"],
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"],
      "@types": ["types/index"],
      "@providers": ["providers"],
      "@navigation/*": ["navigation/*"],
      "@assets/*": ["assets/*"],
      "@constants/*": ["constants/*"],
      "@hooks/*": ["hooks/*"],
      "@services/*": ["services/*"],
      "@ui-modules/*": ["ui-modules/*"],
      "@implementations/*": ["implementations/*"],
      "@styles/*": ["styles/*"]
    }
  }
}
```

## Environment Setup

- Ensure Node.js version >= 18.
- Install [React Native CLI](https://reactnative.dev/docs/environment-setup).
- Set up [Android Studio](https://developer.android.com/studio) and/or [Xcode](https://developer.apple.com/xcode/) for Android/iOS development.

## Development Guidelines

- Follow the established folder structure.
- Use TypeScript for type safety.
- Run `yarn lint` before committing to maintain code quality.
- Use **React Navigation** for navigation between screens.
- Use **Reanimated** and **Lottie** for animations.
- Test components and business logic using **Jest**.

## Husky Setup

Husky is configured to ensure good practices during commits and branch creation.

- **Commit Message Validation**: A pre-commit hook ensures that commit messages follow the format `feature/DEV-<ticketNumber>: <commit message>`, `fix/DEV-<ticketNumber>: <commit message>`, or `hotfix/DEV-<ticketNumber>: <commit message>`. Example:

  - `feature/DEV-123: Add login form`
  - `fix/DEV-124: Fix button styling`
  - `hotfix/DEV-125: Resolve payment issue`

- **Branch Name Validation**: A pre-commit hook checks that branch names follow the format `feature/DEV-<ticketNumber>`, `fix/DEV-<ticketNumber>`, or `hotfix/DEV-<ticketNumber>`. Example:

  - `feature/DEV-123`
  - `fix/DEV-124`
  - `hotfix/DEV-125`

If the commit message or branch name does not match the required pattern, the commit will be rejected, ensuring consistency across the project.

---

Happy coding! If you have any issues, please refer to the React Native documentation or consult the library-specific docs.
