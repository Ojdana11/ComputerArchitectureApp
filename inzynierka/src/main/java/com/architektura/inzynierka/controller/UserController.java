package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {



    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/user")
    public String user() {
        return "user/index";
    }
}

