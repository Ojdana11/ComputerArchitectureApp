package com.architektura.inzynierka.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    @RequestMapping("/")
<<<<<<< HEAD
    //@ResponseBody
=======
>>>>>>> V2-Thyme
    public String hello(){
        return "index";
    }
}
