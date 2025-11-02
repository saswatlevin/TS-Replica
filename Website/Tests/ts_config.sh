# TypeScript compiler that converts TS to JS. Needed only for compiling TS to JS, not at runtime
npm install typescript --save-dev

# Runs TypeScript files directly without compiling. Executes TS files during development, not in production
npm install ts-node --save-dev

# Watches TS/JS files and restarts server on changes. Used for fast dev iteration, irrelevant in production
npm install nodemon --save-dev

# Jest transformer for running TypeScript tests. Enables Jest tests in TS, used only in testing
npm install ts-jest --save-dev

# A type definition in TypeScript is a file or declaration that tells the TypeScript compiler the shapes, types, and interfaces of values, functions, or objects in a module, so the compiler can check your code for type safety without affecting runtime behavior.

"##########################################################################################################################################################"
# Type definitions for Jest in TypeScript. Provides TS typings for Jest, not needed at runtime
npm install @types/jest --save-dev

# Type definitions for argon2. Used to produce a hash of the password field.
npm install @types/argon2 --save-dev

# Type definitions for dotenv. Dotenv is a package that loads environment variables from a .env file into process.env for use in your Node.js app. The process.env is a Node.js object that stores environment variables accessible to your application at runtime.
npm install @types/dotenv --save-dev

# Type definitions for express. Used to create the whole app.
npm install @types/express --save-dev

# Type definitions for xss-sanitizer. Used to sanitize requests and responses. 
npm install @types/express-xss-sanitizer --save-dev

# Type definitions for lodash. Used to create a deep clone of objects.
npm install @types/lodash --save-dev

# Type definitions for mongoose. Used to interact with MongoDB
npm install @types/mongoose --save-dev

# Type definitions for valiator. Used to validate data formats. 
npm install @types/validator --save-dev

# Type definitions for Zod. Used to create schemas to validate request & response data.
npm install @types/zod --save-dev
"##########################################################################################################################################################"


