


package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.entity.Appointment;
import com.demo.repository.AppointmentRepository;

import java.util.List;

@RestController
@RequestMapping("api/v2")
@CrossOrigin(origins = "http://localhost:4200")  // Allow requests from Angular frontend
public class AppointmentControllerDbRepo {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Get list of all doctors
    @GetMapping("/appointment")
    public List<Appointment> getAppointmentList() {
        return appointmentRepository.findAll();
    }

    // Get doctor by ID (using auto-generated id)
    @GetMapping("/appointment/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable(value = "id") Integer id) {
        Appointment appointment = appointmentRepository.findById(id).orElse(null);  // Use ID for lookup
        if (appointment == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if not found
        }
        return ResponseEntity.ok(appointment);
    }

    // Update doctor by ID
    @PutMapping("/appointment/{id}")
    public ResponseEntity<Appointment> updateAppointment(@PathVariable(value = "id") Integer id,
                                                         @RequestBody Appointment appointment) {
        if (!id.equals(appointment.getId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Return 400 if IDs don't match
        }

        Appointment existingAppointment = appointmentRepository.findById(id).orElse(null);
        if (existingAppointment == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);  // Return 404 if doctor not found
        }


        existingAppointment.setAppointmentId(appointment.getAppointmentId());
        existingAppointment.setDoctorName(appointment.getDoctorName());
        existingAppointment.setPatientName(appointment.getPatientName());
        existingAppointment.setAppointmentDate(appointment.getAppointmentDate());
        existingAppointment.setTime(appointment.getTime());
        existingAppointment.setReason(appointment.getReason());

        appointmentRepository.save(existingAppointment);
        return ResponseEntity.ok(existingAppointment);
    }

    // Create a new doctor (doctorId is passed by the frontend, but ID is auto-generated)
    @PostMapping("/appointment")
    public ResponseEntity<Appointment> createDoctor(@RequestBody Appointment appointment) {
        // Ensure the doctorId is not empty
        if (appointment.getAppointmentId() == null || appointment.getAppointmentId().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);  // Ensure doctorId is provided
        }

        // Save new doctor (ID will be auto-generated)
        Appointment createdAppointment = appointmentRepository.save(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAppointment);  // Return 201 Created
    }

    // Delete doctor by ID
    @DeleteMapping("/appointment/{id}")
    public ResponseEntity<Appointment> deleteAppointmentById(@PathVariable(value = "id") Integer id) {
        Appointment existingAppointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));

        appointmentRepository.delete(existingAppointment);
        return ResponseEntity.ok(existingAppointment);  // Return deleted doctor data
    }
}
