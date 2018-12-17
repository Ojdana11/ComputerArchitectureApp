package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.model.AlgoSteps;
import com.architektura.inzynierka.repository.AlgoStepsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;


@Controller
public class AlgoStepsController {

    private static final int max_algo_no=2;


    @Autowired
    private AlgoStepsRepository algoStepsRepository;

    @RequestMapping("/algoTasks/draw")
    public String materialsExchange(Model model, String category){


        Iterable<AlgoSteps> steps = algoStepsRepository.findAll();
        Random generator = new Random();
        Integer algo_no =  generator.nextInt(max_algo_no)+1;
        List<AlgoSteps> addSteps = new ArrayList<>();
        steps.forEach((AlgoSteps x) -> {

            if(x.getAlgo_no().equals(algo_no) && x.getCategory().equals(category)){
                addSteps.add(x);
            }
        } );
        Collections.shuffle(addSteps);
        model.addAttribute("steps", addSteps);
        model.addAttribute("description", category);
        return "materials/algoDescription";
    }

}
