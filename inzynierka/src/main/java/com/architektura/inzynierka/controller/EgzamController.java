package com.architektura.inzynierka.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EgzamController {

    @GetMapping("/egzam")
    public String egzam(){
        return "egzam/index";
    }
}
