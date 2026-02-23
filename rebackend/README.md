# NetBounce Placement - Simple Backend

## Flat Structure - No Layers!

```
rebackend/
├── Controllers/     - All API controllers
├── Entities/        - All database entities
├── Enums/           - All enumerations
├── Services/        - All business logic
├── Interfaces/      - Service interfaces
├── DTOs/            - Data transfer objects
├── Data/            - DbContext
├── Program.cs       - Startup
├── appsettings.json - Configuration
└── rebackend.csproj - Project file
```

## Run

```bash
cd d:\downloads\www.netbounceplacement.com\rebackend
dotnet run
```

## Access

- Swagger: https://localhost:5001/swagger
- API: https://localhost:5001/api

## Endpoints

- POST /api/contact/submit
- GET /api/contact
- POST /api/referral/submit
- GET /api/referral/status/{code}
- GET /api/job/listings
- POST /api/job/apply

Done! Simple and clean.
