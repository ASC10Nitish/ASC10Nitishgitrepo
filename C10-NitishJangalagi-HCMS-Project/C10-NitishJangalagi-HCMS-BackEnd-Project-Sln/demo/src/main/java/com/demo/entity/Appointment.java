package com.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generate primary key
    @Column(name = "ID")
    private int id;  // Primary key

    @Column(name = "APPOINTMENT_ID", nullable = false, unique = true)  // Unique identifier for the appointment
    private String appointmentId;

    @Column(name = "DOCTOR_NAME", nullable = false)  // Name of the doctor for the appointment
    private String doctorName;

    @Column(name = "PATIENT_NAME", nullable = false)  // Name of the patient for the appointment
    private String patientName;

    @Column(name = "APPOINTMENT_DATE", nullable = false)  // Date of the appointment
    private Date appointmentDate;

    @Column(name = "TIME", nullable = false)  // Time of the appointment
    private String time;

    @Column(name = "REASON", nullable = true)  // Reason for the appointment
    private String reason;

    // Default constructor
    public Appointment() {}

    // Constructor with all fields
    public Appointment(String appointmentId, String doctorName, String patientName, Date appointmentDate, String time, String reason) {
        this.appointmentId = appointmentId;
        this.doctorName = doctorName;
        this.patientName = patientName;
        this.appointmentDate = appointmentDate;
        this.time = time;
        this.reason = reason;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public Date getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(Date appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
