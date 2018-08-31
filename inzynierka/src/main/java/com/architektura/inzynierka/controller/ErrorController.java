package com.architektura.inzynierka.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorController {

    @GetMapping
    public String accessDenied(){
        return "error/access-denied";
    }
}
