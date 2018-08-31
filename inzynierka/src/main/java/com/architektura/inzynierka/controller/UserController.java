package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.model.Users;
import com.architektura.inzynierka.repository.UsersRepository;
import com.architektura.inzynierka.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {



    @Autowired
    private UsersRepository usersRepository;

    @Secured({"admin", "user"})
    @GetMapping(path="/index")
    public @ResponseBody Iterable<Users> getAllUsers() {
        // This returns a JSON or XML with the users
        return usersRepository.findAll();
    }
}

