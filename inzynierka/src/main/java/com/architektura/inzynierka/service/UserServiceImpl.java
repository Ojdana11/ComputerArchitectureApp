package com.architektura.inzynierka.service;

import com.architektura.inzynierka.model.User;
import com.architektura.inzynierka.model.UserRegistrationDto;
import com.architektura.inzynierka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public User save(UserRegistrationDto registration){
        User user = new User();
        user.setFirstname(registration.getFirstName());
        user.setLastname(registration.getLastName());
        user.setEmail(registration.getEmail());
        user.setPassword(passwordEncoder.encode(registration.getPassword()));
        user.setRole("USER");
        user.setToken(UUID.randomUUID().toString());
        return userRepository.save(user);
    }

    @Override
    public User findByToken(String token) {
        return userRepository.findByToken(token);
    }


}
