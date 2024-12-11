package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.entity.Patient;
import com.demo.repository.PatientRepository;

import java.util.List;

@RestController
@RequestMapping("api/v4")
@CrossOrigin(origins = "http://localhost:4200")  // Allow requests from Angular frontend
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    // Get list of all patients
    @GetMapping("/patients")
    public List<Patient> getPatientList() {
        return patientRepository.findAll();
    }

    // Get patient by ID (using auto-generated id)
    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable(value = "id") int id) {
        Patient patient = patientRepository.findById(id).orElse(null);  // Use ID for lookup
        if (patient == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if not found
        }
        return ResponseEntity.ok(patient);
    }

    // Update patient by ID
    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable(value = "id") int id,
                                                 @RequestBody Patient patient) {
        if (id != patient.getId()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Return 400 if IDs don't match
        }

        Patient existingPatient = patientRepository.findById(id).orElse(null);
        if (existingPatient == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if patient not found
        }

        // Update patient details
        existingPatient.setPatientId(patient.getPatientId());
        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setPhone(patient.getPhone());
        existingPatient.setDob(patient.getDob());
        existingPatient.setAddress(patient.getAddress());
        existingPatient.setGender(patient.getGender());

        patientRepository.save(existingPatient);
        return ResponseEntity.ok(existingPatient);
    }

    // Create a new patient (patientId is passed by the frontend, but ID is auto-generated)
    @PostMapping("/patients")
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        // Ensure the patientId is not empty
        if (patient.getPatientId() == null || patient.getPatientId().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Ensure patientId is provided
        }

        // Save new patient (ID will be auto-generated)
        Patient createdPatient = patientRepository.save(patient);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPatient);  // Return 201 Created
    }

    // Delete patient by ID
    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Patient> deletePatientById(@PathVariable(value = "id") int id) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id " + id));

        patientRepository.delete(existingPatient);
        return ResponseEntity.ok(existingPatient);  // Return deleted patient data
    }
}


