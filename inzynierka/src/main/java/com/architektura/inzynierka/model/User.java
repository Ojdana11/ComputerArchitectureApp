package com.architektura.inzynierka.model;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name="users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_user;

    private String firstname;

    private String surname;

    private String email;

    private String password;

    private String role;

    private boolean enabled;

    private String token;

    public User() {
    }

    public User(String firstName, String surname, String email, String password) {
        this.firstname = firstName;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    public User(String firstName, String surname,
                String email, String password, String role) {
        this.firstname = firstName;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public Integer getId() {
        return id_user;
    }

    public void setId(Integer id_user) {
        this.id_user = id_user;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname(){
        return surname;
    }
    public void setLastname(String lastname){
        this.surname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() { return role; }

    public void setRole(String role) { this.role = role;}

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id_user +
                ", firstName='" + firstname + '\'' +
                ", lastName='" + surname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + "*********" + '\'' +
                ", roles=" + role +
                '}';
    }
}
