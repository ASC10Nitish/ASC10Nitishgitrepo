

package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.entity.Doctor;
import com.demo.repository.DoctorRepository;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:4200")  // Allow requests from Angular frontend
public class DoctorControllerDbRepo {

    @Autowired
    private DoctorRepository doctorRepository;

    // Get list of all doctors
    @GetMapping("/doctor")
    public List<Doctor> getDoctorList() {
        return doctorRepository.findAll();
    }

    // Get doctor by ID (using auto-generated id)
    @GetMapping("/doctor/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable(value = "id") Integer id) {
        Doctor doctor = doctorRepository.findById(id).orElse(null);  // Use ID for lookup
        if (doctor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if not found
        }
        return ResponseEntity.ok(doctor);
    }

    // Update doctor by ID
    @PutMapping("/doctor/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable(value = "id") Integer id,
                                               @RequestBody Doctor doctor) {
        if (!id.equals(doctor.getId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Return 400 if IDs don't match
        }

        Doctor existingDoctor = doctorRepository.findById(id).orElse(null);
        if (existingDoctor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if doctor not found
        }

        // Update details
        existingDoctor.setName(doctor.getName());
        existingDoctor.setSpeciality(doctor.getSpeciality());
        existingDoctor.setExperience(doctor.getExperience());
        existingDoctor.setEmail(doctor.getEmail());
        existingDoctor.setContactNumber(doctor.getContactNumber());

        doctorRepository.save(existingDoctor);
        return ResponseEntity.ok(existingDoctor);
    }

    // Create a new doctor (doctorId is passed by the frontend, but ID is auto-generated)
    @PostMapping("/doctor")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        // Ensure the doctorId is not empty
        if (doctor.getDoctorId() == null || doctor.getDoctorId().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Ensure doctorId is provided
        }

        // Save new doctor (ID will be auto-generated)
        Doctor createdDoctor = doctorRepository.save(doctor);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDoctor);  // Return 201 Created
    }

    // Delete doctor by ID
    @DeleteMapping("/doctor/{id}")
    public ResponseEntity<Doctor> deleteDoctorById(@PathVariable(value = "id") Integer id) {
        Doctor existingDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found with id " + id));

        doctorRepository.delete(existingDoctor);
        return ResponseEntity.ok(existingDoctor);  // Return deleted doctor data
    }
}
