-- Insert sample user
INSERT INTO users (username, password, email, phone_number) VALUES
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@example.com', '1234567890');

-- Insert sample services
INSERT INTO services (name, description, price, duration_minutes) VALUES
('Oil Change', 'Complete oil change service including filter replacement', 49.99, 30);
INSERT INTO services (name, description, price, duration_minutes) VALUES
('Tire Rotation', 'Rotate tires for even wear', 19.99, 15);
INSERT INTO services (name, description, price, duration_minutes) VALUES
('Brake Inspection', 'Inspect brake pads and rotors', 29.99, 20);
INSERT INTO services (name, description, price, duration_minutes) VALUES
('Battery Check', 'Check battery health and terminals', 9.99, 10);
INSERT INTO services (name, description, price, duration_minutes) VALUES
('Air Filter Replacement', 'Replace engine air filter', 24.99, 15);
