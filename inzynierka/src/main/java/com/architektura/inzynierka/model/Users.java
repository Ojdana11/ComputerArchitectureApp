package com.architektura.inzynierka.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Users {
    @Id
    private Integer id_user;

    private String firstname;

    private String surname;

    private String email;

    private String password;

    private String role;


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
}
