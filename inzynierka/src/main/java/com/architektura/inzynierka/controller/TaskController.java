package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.model.Tasks;
import com.architektura.inzynierka.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;


@Controller
public class TaskController {

    @Autowired
    private TasksRepository tasksRepository;


    @RequestMapping("/task")
    public String task(){
        return "task/index";
    }

    @RequestMapping("/task/showall")
    public String showAllTasks(Model model){

        Iterable<Tasks> tasks = tasksRepository.findAll();
        model.addAttribute("tasks", tasks);
        return "task/show";
    }

    @RequestMapping("/task/showadd")
    public String showAddTasks(Model model){

        Iterable<Tasks> tasks = tasksRepository.findAll();
        List<Tasks> addTasks = new ArrayList<>();
                tasks.forEach((Tasks x) -> {

                    if(x.getCategory().equals("add")){
                        addTasks.add(x);
                    }
                } );

        model.addAttribute("tasks", addTasks);
        return "task/show";
    }


}
