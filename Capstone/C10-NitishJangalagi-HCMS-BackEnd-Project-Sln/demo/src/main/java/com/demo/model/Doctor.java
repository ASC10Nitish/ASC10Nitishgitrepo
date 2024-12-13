
package com.demo.model;

public class Doctor {
    private int id;
    private String doctorId;  // Changed from doctor_id to doctorId
    private String name;
    private String speciality;
    private int experience;
    private String email;
    private String contactNumber;  // Changed from contact_number to contactNumber

    // Constructor with parameters
    public Doctor(String doctorId, String name, String speciality, int experience, String email, String contactNumber) {
        super();
        this.doctorId = doctorId;
        this.name = name;
        this.speciality = speciality;
        this.experience = experience;
        this.email = email;
        this.contactNumber = contactNumber;
    }

    // Getter and Setter for id
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // Getter and Setter for doctorId
    public String getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for speciality
    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    // Getter and Setter for experience
    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter for contactNumber
    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}
