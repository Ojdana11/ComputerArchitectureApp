package com.architektura.inzynierka.service;

import com.architektura.inzynierka.model.User;


import com.architektura.inzynierka.model.UserRegistrationDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    User findByEmail(String email);

    User save(UserRegistrationDto registration);
    User findByToken(String token);
}
