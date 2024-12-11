package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.entity.Hospital;
import com.demo.repository.HospitalRepository;

import java.util.List;

@RestController
@RequestMapping("api/v3")
@CrossOrigin(origins = "http://localhost:4200")  // Allow requests from Angular frontend
public class HospitalController {

    @Autowired
    private HospitalRepository hospitalRepository;

    // Get list of all hospitals
    @GetMapping("/hospital")
    public List<Hospital> getHospitalList() {
        return hospitalRepository.findAll();
    }

    // Get hospital by ID (using auto-generated id)
    @GetMapping("/hospital/{id}")
    public ResponseEntity<Hospital> getHospitalById(@PathVariable(value = "id") Integer id) {
        Hospital hospital = hospitalRepository.findById(id).orElse(null);  // Use ID for lookup
        if (hospital == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if not found
        }
        return ResponseEntity.ok(hospital);
    }

    // Update hospital by ID
    @PutMapping("/hospital/{id}")
    public ResponseEntity<Hospital> updateHospital(@PathVariable(value = "id") Integer id,
                                                   @RequestBody Hospital hospital) {
        if (!id.equals(hospital.getId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Return 400 if IDs don't match
        }

        Hospital existingHospital = hospitalRepository.findById(id).orElse(null);
        if (existingHospital == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if hospital not found
        }

        // Update details
        existingHospital.setId(hospital.getId());
        existingHospital.setHospitalName(hospital.getHospitalName());
        existingHospital.setAddress(hospital.getAddress());
        existingHospital.setContactNumber(hospital.getContactNumber());
        existingHospital.setEmail(hospital.getEmail());

        hospitalRepository.save(existingHospital);
        return ResponseEntity.ok(existingHospital);
    }

    // Create a new hospital (hospitalId is passed by the frontend, but ID is auto-generated)
    @PostMapping("/hospital")
    public ResponseEntity<Hospital> createHospital(@RequestBody Hospital hospital) {
        // Ensure the hospitalId is not empty
        if (hospital.getHospitalId() == null || hospital.getHospitalId().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Ensure hospitalId is provided
        }

        // Save new hospital (ID will be auto-generated)
        Hospital createdHospital = hospitalRepository.save(hospital);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdHospital);  // Return 201 Created
    }

    // Delete hospital by ID
    @DeleteMapping("/hospital/{id}")
    public ResponseEntity<Hospital> deleteHospitalById(@PathVariable(value = "id") Integer id) {
        Hospital existingHospital = hospitalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hospital not found with id " + id));

        hospitalRepository.delete(existingHospital);
        return ResponseEntity.ok(existingHospital);  // Return deleted hospital data
    }
}
