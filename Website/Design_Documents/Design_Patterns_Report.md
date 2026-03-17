# Design Patterns Report: Taylor Stitch Codebase

Based on an analysis of the codebase located in `src`, here is a comprehensive report on the design patterns and architectural principles utilized within the project.

## 1. MVC (Model-View-Controller) / Layered Architecture
While this is a backend API and doesn't explicitly serve views, it tightly follows the API equivalent of the **MVC** pattern. The codebase separates concerns across distinct layers:
*   **Models (`Middleware/Models/`)**: Responsible for data schema definitions and database interactions (e.g., `Product.js`, `User.js`).
*   **Controllers (`Middleware/Controllers/`)**: Contains the core business logic, responding to requests and interacting with Models (e.g., `productControllers.js`).
*   **Routes (`Middleware/Routes/`)**: Acts as the router/dispatcher that maps HTTP endpoints to specific controller actions.

## 2. Chain of Responsibility Pattern (Middleware)
This pattern is fundamental to Express.js applications. Functions are chained together, with each function deciding to either process the request, attach data to it, return a response, or pass control to the `next()` middleware.
*   **Examples**: `app.use(express.json())`, custom validators like `responseValidator`, and error handlers (`globalErrorHandler`) all operate as links in the chain of responsibility.

## 3. Singleton Pattern
The Singleton pattern ensures a class has only one instance and provides a global point of access to it.
*   **Database Connection**: `Middleware/connectToDB.js` calls `mongoose.connect()`. Mongoose manages a single connection pool across the application.
*   **Module Caching**: Node.js heavily relies on the module caching pattern. When a controller or model is required via `require()`, Node.js caches it, meaning consecutive requires return the exact same singleton instance. 

## 4. Decorator / Wrapper Pattern
The Decorator pattern allows behavior to be added to individual objects or functions dynamically.
*   **`asyncErrorHandler`**: Located in `Middleware/ErrorHandlers/asyncErrorHandler.js`, this function acts as a decorator for asynchronous controller methods. It wraps the target function to seamlessly catch unhandled promise rejections and pass them to the Express error-handling middleware, eliminating the need for repetitive `try-catch` blocks throughout controllers.

## 5. Builder / Pipeline Pattern
The Pipeline pattern involves processing data in a sequence of stages, where the output of one stage is the input to the next.
*   **MongoDB Aggregation**: The `AggregationPipelines` directory (e.g., `ProductAggregationPipeline.js`) utilizes MongoDB's aggregate framework. This acts as a robust pipeline/builder pattern using steps like `$addFields`, `$project`, and `$merge` to transform and build complex documents sequentially.

## 6. Factory / Inheritance Pattern (Custom Exceptions)
The application leverages class inheritance to create a hierarchy of specialized error types.
*   **Operational Errors**: `Middleware/OperationalErrors/CustomError.js` extends the native JavaScript `Error` class and acts as a base class. Subclasses like `ResourceNotFoundError` and `DuplicateDocumentError` inherit from it to provide contextual, specialized error instances with predefined status codes.

## 7. Facade / Module Pattern
The Facade pattern provides a simplified interface to a larger body of code.
*   **Support Functions**: The `Middleware/Controllers/SupportFunctions/` directory hides complex validation logic and repetitive checks (like checking if a product exists or if an object is empty) behind a clean API module. Controllers consume these helpers, keeping them lean and abstracting away the procedural complexity.

## 8. Data Mapper / Active Record (Hybrid)
By employing Mongoose (`Product.js` schema), the codebase uses a hybrid of Data Mapper and Active Record patterns. Mongoose Models define the data structure (extending behavior to documents) while abstracting the complexities of direct MongoDB driver interactions.
