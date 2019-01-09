package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.model.Calculator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/calculator")
public class CalculatorController {

    @ModelAttribute("calculator")
    public Calculator calculator() {
        return new Calculator();
    }

    @GetMapping
    public String showCalculatorForm(){
        return "calculator";
    }

}
