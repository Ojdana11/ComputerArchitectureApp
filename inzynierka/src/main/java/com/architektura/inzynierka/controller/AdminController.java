package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.model.TaskDto;
import com.architektura.inzynierka.model.Tasks;
import com.architektura.inzynierka.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
public class AdminController {

    @Autowired
    private TasksRepository tasksRepository;

    @ModelAttribute("taskDto")
    public TaskDto taskDto() {
        return new TaskDto();
    }

    @GetMapping("/admin")
    public String admin(Model model){

        Iterable<Tasks> tasks = tasksRepository.findAll();
        model.addAttribute("tasks", tasks);
        return "admin/index";

    }


    @GetMapping("/admin/task/showall")
    public String showAllTasks(Model model){

        Iterable<Tasks> tasks = tasksRepository.findAll();
        model.addAttribute("tasks", tasks);
        return "admin/index";
    }

    @GetMapping("/admin/task/delete")
    public String showTasksToDelete(Model model){

        Iterable<Tasks> tasks = tasksRepository.findAll();

        model.addAttribute("tasks", tasks);
        return "task/show";
    }

    @PostMapping("/admin/task/add")
    public String addTask(@ModelAttribute("taskDto") @Valid TaskDto taskDto,
                          BindingResult result, HttpServletRequest request){

        Tasks task = new Tasks();
        task.setAnswer(taskDto.getAnswer());
        task.setQuestion(taskDto.getQuestion());
        task.setCategory(taskDto.getCategory());
        tasksRepository.save(task);
        return "redirect:/admin?success";
    }

}
