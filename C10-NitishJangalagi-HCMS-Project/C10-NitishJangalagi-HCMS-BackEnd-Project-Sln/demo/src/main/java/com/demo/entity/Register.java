//package com.demo.entity;
//
//public class Register {
//}
package com.demo.entity;
import jakarta.persistence.*;
@Entity@Table(name = "register")
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "Full Name", nullable = false)
    private String Fullname;
    @Column(name = "Email", nullable = false, unique = true)
    private String email;
    @Column(name = "Password", nullable = false)
    private String password;
    @Column(name = "Confirm Password", nullable = false, unique = true)
    private String confirmPassword;
    public Register()    {    }
    public Register( int id, String Fullname, String email, String password, String confirmPassword)
    {    this.id = id;
        this.Fullname = Fullname;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;    }
    public int getId() {
        return id;    }
    public void setId(int id) {
        this.id = id;    }
    public String getName() {
        return Fullname;    }
    public void setName(String Fullname) {
        this.Fullname = Fullname;    }
    public String getEmail() {
        return email;    }
    public void setEmail(String email) {
        this.email = email;    }
    public String getPassword() {
        return password;    }
    public void setPassword(String password) {
        this.password = password;    }
    public String getConfirmPassword() {
        return confirmPassword;    }
    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;    }}