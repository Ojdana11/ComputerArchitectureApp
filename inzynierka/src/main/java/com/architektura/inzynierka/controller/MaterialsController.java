package com.architektura.inzynierka.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MaterialsController {

    @GetMapping("/materials")
    public String index(){
        return "materials/index";
    }
}
