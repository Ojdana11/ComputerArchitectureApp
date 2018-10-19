package com.architektura.inzynierka.controller;

import org.springframework.stereotype.Controller;
<<<<<<< HEAD

@Controller
public class AdminController {
=======
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {

    @GetMapping("/admin")
    public String admin(){
        return "admin/index";
    }
>>>>>>> V2-Thyme
}
