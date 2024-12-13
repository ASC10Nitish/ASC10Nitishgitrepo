package com.demo.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generate primary key
    @Column(name = "ID")
    private int id;  // Primary key

    @Column(name = "DOCTOR_ID", nullable = false, unique = true)  // doctorId will be a unique string identifier
    private String doctorId;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "CONTACT_NUMBER")
    private String contactNumber;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "EXPERIENCE")
    private int experience;

    @Column(name = "SPECIALITY")
    private String speciality;

    // Default constructor
    public Doctor() {}

    // Constructor with doctorId and other fields (excluding the auto-generated ID)
    public Doctor(String doctorId, String name, String speciality, int experience, String email, String contactNumber) {
        this.doctorId = doctorId;
        this.name = name;
        this.speciality = speciality;
        this.experience = experience;
        this.email = email;
        this.contactNumber = contactNumber;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}
