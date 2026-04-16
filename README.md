# Vehicle Service System

A full-stack web application for managing vehicle services with user authentication, service browsing, and booking functionality.

## Features

- **User Authentication**: JWT-based login and registration
- **Service Management**: Browse and manage available services
- **Service Booking**: Request to book services with date and time
- **Dashboard**: User-friendly dashboard for managing bookings

## Tech Stack

### Frontend
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Axios**: HTTP client with JWT interceptors
- **CSS3**: Styling

### Backend
- **Spring Boot 3.2**: Java framework
- **Spring Security**: Authentication and authorization
- **JWT**: Token-based authentication
- **JPA/Hibernate**: ORM for database
- **MySQL**: Database (or H2 for development)

## Project Structure

```
Mini-project/
├── frontend/                 # React + Vite application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   ├── styles/          # CSS styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example
│   └── index.html
├── backend/                           # Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/vehicleservice/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   ├── security/
│   │   │   │   └── VehicleServiceApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── README.md
└── .env.example
```

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- MySQL (optional, H2 can be used for development)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Configure the database in `src/main/resources/application.properties`

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```'

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Services
- `GET /api/services` - Get all services
- `GET /api/services/{id}` - Get service by ID
- `POST /api/services` - Create new service

### Bookings
- `POST /api/bookings` - Create booking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
