# Lines of Code Estimation Report

> [!NOTE]
> This report was verified with a full per-file line count (see breakdown below). The totals have been confirmed accurate.

This report estimates the total number of lines of code in this project, based on your criteria.

## Exclusions applied:
The following files and directories were explicitly excluded from the line count:
- [nodemon.json](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/nodemon.json)
- [package-lock.json](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/package-lock.json)
- [package.json](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/package.json)
- `IntegrationTests/` directory

*Note: Common non-project-code directories like `node_modules`, `.git`, and `.vs` have also been safely excluded from the calculations to ensure a realistic count of the handwritten code for this project.*

## Breakdown by File Type

| File Extension | File Count | Total Lines of Code |
|:---------------|:-----------|:--------------------|
| [.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/server.js)          | 75         | 5,199               |
| [.env](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/.env)         | 1          | 3                   |
| [.gitignore](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/.gitignore)   | 1          | 8                   |
| [.sh](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/start_mongodb.sh)          | 3          | 5                   |
| **Total**      | **80**     | **5,215**           |

## Summary

The **verified** total number of lines of code in this project is **5,215 lines**, spread across **80 files**.

---

## Full Per-File Breakdown

### AggregationPipelines

| File | Lines |
|:-----|------:|
| [AggregationPipelines\OrderAggregationPipeline.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/AggregationPipelines/OrderAggregationPipeline.js) | 44 |
| [AggregationPipelines\OrderItemAggregationPipeline.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/AggregationPipelines/OrderItemAggregationPipeline.js) | 38 |
| [AggregationPipelines\ProductAggregationPipeline.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/AggregationPipelines/ProductAggregationPipeline.js) | 51 |
| [AggregationPipelines\ProductItemAggregationPipeline.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/AggregationPipelines/ProductItemAggregationPipeline.js) | 80 |
| **Subtotal** | **213** |

### Middleware / Controllers

| File | Lines |
|:-----|------:|
| [Middleware\Controllers\cartItemControllers.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/cartItemControllers.js) | 309 |
| [Middleware\Controllers\defaultController.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/defaultController.js) | 4 |
| [Middleware\Controllers\productControllers.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/productControllers.js) | 285 |
| [Middleware\Controllers\productImageControllers.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/productImageControllers.js) | 180 |
| [Middleware\Controllers\productItemControllers.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/productItemControllers.js) | 179 |
| [Middleware\Controllers\shippingAddressControllers.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/shippingAddressControllers.js) | 250 |
| [Middleware\Controllers\urlNotFoundController.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/urlNotFoundController.js) | 9 |
| [Middleware\Controllers\userControllers.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/userControllers.js) | 167 |
| **Subtotal** | **1,383** |

### Middleware / Controllers / SupportFunctions

| File | Lines |
|:-----|------:|
| [Middleware\Controllers\SupportFunctions\cartItemSupportFunctions.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/SupportFunctions/cartItemSupportFunctions.js) | 55 |
| [Middleware\Controllers\SupportFunctions\productImageSupportFunctions.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/SupportFunctions/productImageSupportFunctions.js) | 66 |
| [Middleware\Controllers\SupportFunctions\productItemSupportFunctions.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/SupportFunctions/productItemSupportFunctions.js) | 103 |
| [Middleware\Controllers\SupportFunctions\productSupportFunctions.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/SupportFunctions/productSupportFunctions.js) | 214 |
| [Middleware\Controllers\SupportFunctions\shippingAddressSupportFunctions.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Controllers/SupportFunctions/shippingAddressSupportFunctions.js) | 192 |
| **Subtotal** | **630** |

### Middleware / ErrorHandlers

| File | Lines |
|:-----|------:|
| [Middleware\ErrorHandlers\asyncErrorHandler.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/ErrorHandlers/asyncErrorHandler.js) | 6 |
| [Middleware\ErrorHandlers\globalErrorHandler.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/ErrorHandlers/globalErrorHandler.js) | 36 |
| **Subtotal** | **42** |

### Middleware / Models

| File | Lines |
|:-----|------:|
| [Middleware\Models\CartItem.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/CartItem.js) | 35 |
| [Middleware\Models\Product.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/Product.js) | 100 |
| [Middleware\Models\ProductGarmentWeight.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/ProductGarmentWeight.js) | 16 |
| [Middleware\Models\ProductImage.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/ProductImage.js) | 19 |
| [Middleware\Models\ProductItem.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/ProductItem.js) | 47 |
| [Middleware\Models\ProductSupplyType.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/ProductSupplyType.js) | 15 |
| [Middleware\Models\ShippingAddress.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/ShippingAddress.js) | 48 |
| [Middleware\Models\User.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Models/User.js) | 70 |
| **Subtotal** | **350** |

### Middleware / OperationalErrors

| File | Lines |
|:-----|------:|
| [Middleware\OperationalErrors\CustomError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/CustomError.js) | 16 |
| [Middleware\OperationalErrors\DuplicateDocumentError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/DuplicateDocumentError.js) | 19 |
| [Middleware\OperationalErrors\DuplicateSubDocumentError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/DuplicateSubDocumentError.js) | 19 |
| [Middleware\OperationalErrors\EmptyRequestBodyError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/EmptyRequestBodyError.js) | 18 |
| [Middleware\OperationalErrors\IllegalUpdateError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/IllegalUpdateError.js) | 19 |
| [Middleware\OperationalErrors\RedundantUpdateError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/RedundantUpdateError.js) | 19 |
| [Middleware\OperationalErrors\ResourceNotFoundError.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/OperationalErrors/ResourceNotFoundError.js) | 18 |
| **Subtotal** | **128** |

### Middleware / Routes

| File | Lines |
|:-----|------:|
| [Middleware\Routes\cartItemRoutes.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/cartItemRoutes.js) | 10 |
| [Middleware\Routes\defaultRoute.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/defaultRoute.js) | 5 |
| [Middleware\Routes\productImageRoutes.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/productImageRoutes.js) | 11 |
| [Middleware\Routes\productItemRoutes.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/productItemRoutes.js) | 12 |
| [Middleware\Routes\productRoutes.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/productRoutes.js) | 14 |
| [Middleware\Routes\shippingAddressRoutes.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/shippingAddressRoutes.js) | 12 |
| [Middleware\Routes\urlNotFoundRoute.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/urlNotFoundRoute.js) | 5 |
| [Middleware\Routes\userRoutes.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Routes/userRoutes.js) | 13 |
| **Subtotal** | **82** |

### Middleware / Sanitizers

| File | Lines |
|:-----|------:|
| [Middleware\Sanitizers\dataSanitizer.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Sanitizers/dataSanitizer.js) | 10 |
| [Middleware\Sanitizers\responseSanitizer.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Sanitizers/responseSanitizer.js) | 61 |
| **Subtotal** | **71** |

### Middleware / Schemas

| File | Lines |
|:-----|------:|
| [Middleware\Schemas\cartItemSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/cartItemSchemas.js) | 44 |
| [Middleware\Schemas\objectIdSchema.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/objectIdSchema.js) | 7 |
| [Middleware\Schemas\orderItemSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/orderItemSchemas.js) | 24 |
| [Middleware\Schemas\orderSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/orderSchemas.js) | 57 |
| [Middleware\Schemas\productImageSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/productImageSchemas.js) | 44 |
| [Middleware\Schemas\productItemSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/productItemSchemas.js) | 189 |
| [Middleware\Schemas\productSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/productSchemas.js) | 194 |
| [Middleware\Schemas\reviewSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/reviewSchemas.js) | 29 |
| [Middleware\Schemas\shippingAddressSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/shippingAddressSchemas.js) | 108 |
| [Middleware\Schemas\userSchemas.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/userSchemas.js) | 101 |
| **Subtotal** | **797** |

### Middleware / Schemas / TestObjects

| File | Lines |
|:-----|------:|
| [Middleware\Schemas\TestObjects\testOrderObjects.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/TestObjects/testOrderObjects.js) | 99 |
| [Middleware\Schemas\TestObjects\testProductObjects.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/TestObjects/testProductObjects.js) | 464 |
| [Middleware\Schemas\TestObjects\testReviewObject.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/TestObjects/testReviewObject.js) | 26 |
| [Middleware\Schemas\TestObjects\testUserObjects.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/TestObjects/testUserObjects.js) | 161 |
| **Subtotal** | **750** |

### Middleware / Validators

| File | Lines |
|:-----|------:|
| [Middleware\Validators\CustomValidators\cartItemValidators.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/CustomValidators/cartItemValidators.js) | 17 |
| [Middleware\Validators\CustomValidators\customFormatValidators.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/CustomValidators/customFormatValidators.js) | 46 |
| [Middleware\Validators\CustomValidators\productItemValidators.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/CustomValidators/productItemValidators.js) | 36 |
| [Middleware\Validators\CustomValidators\productValidators.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/CustomValidators/productValidators.js) | 152 |
| [Middleware\Validators\CustomValidators\reviewValidators.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/CustomValidators/reviewValidators.js) | 11 |
| [Middleware\Validators\CustomValidators\shippingAddressValidators.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/CustomValidators/shippingAddressValidators.js) | 53 |
| [Middleware\Validators\requestValidator.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/requestValidator.js) | 18 |
| [Middleware\Validators\responseSchemaValidator.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/responseSchemaValidator.js) | 79 |
| [Middleware\Validators\responseValidator.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/responseValidator.js) | 73 |
| [Middleware\Validators\schemaValidator.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Validators/schemaValidator.js) | 21 |
| **Subtotal** | **506** |

### Middleware (Root-level helpers)

| File | Lines |
|:-----|------:|
| [Middleware\connectToDB.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/connectToDB.js) | 13 |
| [Middleware\createRandomString.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/createRandomString.js) | 6 |
| [Middleware\getCurrentDateTime.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/getCurrentDateTime.js) | 7 |
| [Middleware\pruneObject.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/pruneObject.js) | 19 |
| **Subtotal** | **45** |

### Root-level files

| File | Lines |
|:-----|------:|
| [experiment.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/experiment.js) | 159 |
| [jest.config.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/jest.config.js) | 13 |
| [server.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/server.js) | 30 |
| [mongodb_backup_restore.sh](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/mongodb_backup_restore.sh) | 2 |
| [network_troubleshooter.sh](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/network_troubleshooter.sh) | 2 |
| [start_mongodb.sh](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/start_mongodb.sh) | 1 |
| [.env](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/.env) | 3 |
| [.gitignore](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/.gitignore) | 8 |
| **Subtotal** | **218** |

---

## Educational Value Assessment

### What already makes it great for learning

This codebase mirrors how production Node.js APIs are actually structured — not the simplified `app.js`-does-everything tutorials that dominate the internet. Several elements stand out:

- **Real-world layered architecture** — The clean separation of Routes → Controllers → SupportFunctions → Models teaches a critical professional discipline that most beginners never encounter.
- **Custom error class hierarchy** — Having `DuplicateDocumentError`, `IllegalUpdateError`, et al. extend `CustomError` is a concept most tutorials skip entirely, yet it's standard in production codebases.
- **Distinct validation, schema, and sanitizer layers** — Most beginners conflate these. Keeping them separate teaches an important design principle.
- **Aggregation pipelines** — MongoDB aggregations are notoriously under-taught. Dedicated pipeline files are a real differentiator.
- **Test infrastructure baked in** — `TestObjects` living inside the Schemas directory, plus [jest.config.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/jest.config.js), signals that testing was a first-class concern from the start.

### Why three planned additions would make it exceptional

| Addition | Why it elevates the project |
|:---------|:---------------------------|
| **Authentication & Authorization** | Adds JWT/session handling, role-based access control, and middleware chaining — the most in-demand backend skill for junior developers |
| **Database Concurrency** | Covers transactions, atomic operations, and race conditions — almost never covered in educational projects, yet critical in production |
| **Documentation** (e.g. Swagger/OpenAPI) | Teaches a professional skill most bootcamp graduates are missing, and makes the project self-explanatory to interviewers and collaborators |

### One honest caveat

The [Middleware/Schemas/TestObjects/testProductObjects.js](file:///c:/Users/saswa/OneDrive/Desktop/Taylor_Stitch/Website/src/Middleware/Schemas/TestObjects/testProductObjects.js) file at **464 lines** suggests a genuinely complex domain model. That complexity is a double-edged sword: it is realistic and valuable, but could overwhelm a beginner without good documentation guiding them through the data model first.

### Bottom line

> [!TIP]
> With authentication, concurrency handling, and documentation in place, this would not just be a portfolio project — it would be the kind of codebase you could hand to an intermediate developer and say *"study this before your first production job."* That is a rare thing to be able to say about a personal project.
