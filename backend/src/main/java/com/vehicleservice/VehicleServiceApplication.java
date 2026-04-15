package com.vehicleservice;

import com.vehicleservice.entity.User;
import com.vehicleservice.repository.ServiceRepository;
import com.vehicleservice.repository.UserRepository;
import com.vehicleservice.entity.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;

@SpringBootApplication
public class VehicleServiceApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(VehicleServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            User defaultUser = new User();
            defaultUser.setUsername("admin");
            defaultUser.setPassword(passwordEncoder.encode("password"));
            defaultUser.setEmail("admin@example.com");
            defaultUser.setPhoneNumber("1234567890");
            userRepository.save(defaultUser);
            System.out.println("Default user created: username=admin, password=password");
        }

        if (serviceRepository.count() == 0) {
            Service oilChange = new Service();
            oilChange.setName("Oil Change");
            oilChange.setDescription("Quick oil and filter change to keep your engine running smoothly.");
            oilChange.setPrice(BigDecimal.valueOf(49.99));
            oilChange.setDurationMinutes(30);
            serviceRepository.save(oilChange);

            Service tireRotation = new Service();
            tireRotation.setName("Tire Rotation");
            tireRotation.setDescription("Rotate tires for even wear and longer tire life.");
            tireRotation.setPrice(BigDecimal.valueOf(24.99));
            tireRotation.setDurationMinutes(20);
            serviceRepository.save(tireRotation);

            Service brakeInspection = new Service();
            brakeInspection.setName("Brake Inspection");
            brakeInspection.setDescription("Inspect brake pads, fluids, and rotors for safe stopping power.");
            brakeInspection.setPrice(BigDecimal.valueOf(34.99));
            brakeInspection.setDurationMinutes(25);
            serviceRepository.save(brakeInspection);

            Service batteryCheck = new Service();
            batteryCheck.setName("Battery Check");
            batteryCheck.setDescription("Test battery health and charging system for reliable starts.");
            batteryCheck.setPrice(BigDecimal.valueOf(19.99));
            batteryCheck.setDurationMinutes(15);
            serviceRepository.save(batteryCheck);

            Service airFilter = new Service();
            airFilter.setName("Air Filter Replacement");
            airFilter.setDescription("Replace the air filter to improve engine performance and fuel efficiency.");
            airFilter.setPrice(BigDecimal.valueOf(29.99));
            airFilter.setDurationMinutes(15);
            serviceRepository.save(airFilter);

            System.out.println("Seeded default service catalog.");
        }
    }
}