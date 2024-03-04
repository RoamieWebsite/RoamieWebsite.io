CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(20)
);

INSERT INTO Customers (first_name, last_name, email, phone_number)
VALUES ('John', 'Doe', 'john.doe@gmail.com', '123-456-7890'),('Jane', 'Smith', 'jane.smith@gmail.com', '987-654-3210');

-- Table for storing destinations
CREATE TABLE Destinations (
    destination_id INT PRIMARY KEY AUTO_INCREMENT,
    destination_name VARCHAR(100),
    country VARCHAR(100),
    price DECIMAL(10,2)
);

INSERT INTO Destinations (destination_name, country, price)
VALUES ('Paris', 'France', 'City of Love and Lights', 1500.00),
       ('Italy', 'Milan', 'Vibrant metropolis of Milan with rich culture', 2000.00);


-- Table for storing flights
CREATE TABLE Flights (
    flight_id INT PRIMARY KEY AUTO_INCREMENT,
    flight_number VARCHAR(20),
    airline VARCHAR(100),
    departure_airport VARCHAR(100),
    arrival_airport VARCHAR(100),
    departure_datetime DATETIME,
    arrival_datetime DATETIME,
    price DECIMAL(10,2)
);

INSERT INTO Flights (flight_number, airline, departure_airport, arrival_airport, departure_datetime, arrival_datetime, price)
VALUES ('ABC123', 'Airline1', 'JFK', 'CDG', '2023-03-01 08:00:00', '2024-03-01 14:00:00', 500.00),
       ('XYZ456', 'Airline2', 'LAX', 'HND', '2023-03-15 10:00:00', '2024-03-16 18:00:00', 800.00);


-- Table for storing hotels
CREATE TABLE Hotels (
    hotel_id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(100),
    city VARCHAR(100),
    address VARCHAR(255),
    price_per_night DECIMAL(10,2)
);

INSERT INTO Hotels (hotel_name, city, address, price_per_night)
VALUES ('Hotel A', 'Paris', '123 Rue de Rivoli', 200.00),
       ('Hotel B', 'Tokyo', '456 Shinjuku Ave', 250.00);


-- Table for storing activities
CREATE TABLE Activities (
    activity_id INT PRIMARY KEY AUTO_INCREMENT,
    activity_name VARCHAR(100),
    city VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2)
);

INSERT INTO Activities (activity_name, city, description, price)
VALUES ('Eiffel Tower Tour', 'Paris', 'Guided tour of the Eiffel Tower', 50.00),
       ('Sushi Making Class', 'Tokyo', 'Learn to make sushi from a local chef', 80.00);

-- Table for storing bookings
CREATE TABLE Bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    flight_id INT,
    hotel_id INT,
    activity_id INT,
    booking_date DATE,
    departure_date DATE,
    return_date DATE,
    num_travelers INT,
    total_price DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (flight_id) REFERENCES Flights(flight_id),
    FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id),
    FOREIGN KEY (activity_id) REFERENCES Activities(activity_id)
);

INSERT INTO Bookings (customer_id, flight_id, hotel_id, activity_id, booking_date, departure_date, return_date, num_travelers, total_price)
VALUES (1, 1, 1, 1, '2024-02-12', '2024-03-01', '2024-03-10', 2, 1200.00),
       (2, 2, 2, 2, '2024-02-12', '2024-03-15', '2024-03-20', 1, 1130.00);
