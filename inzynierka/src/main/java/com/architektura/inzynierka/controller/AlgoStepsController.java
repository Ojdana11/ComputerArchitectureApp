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
      /*AlgoSteps algostep1 = new AlgoSteps();
      AlgoSteps algostep2 = new AlgoSteps();
      AlgoSteps algostep3 = new AlgoSteps();
      AlgoSteps algostep4 = new AlgoSteps();
      algostep1.setSteps_no(1);
      algostep1.setId_algo_steps(1);
      algostep1.setDescription("Krok 1");

      algostep2.setSteps_no(2);
      algostep2.setId_algo_steps(2);

      algostep3.setSteps_no(3);
      algostep3.setId_algo_steps(3);

      algostep4.setSteps_no(4);
      algostep4.setId_algo_steps(4);

      algostep2.setDescription("Krok 2");
      algostep3.setDescription("Krok 3");
      algostep4.setDescription("Krok 4");
        addSteps.add(algostep1);
        addSteps.add(algostep2);
        addSteps.add(algostep3);
        addSteps.add(algostep4);
*/        Collections.shuffle(addSteps);
        model.addAttribute("steps", addSteps);
        model.addAttribute("description", category);
        return "materials/algoDescription";
    }

}
