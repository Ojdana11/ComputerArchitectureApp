package com.architektura.inzynierka.service;

import com.architektura.inzynierka.model.Tasks;
import com.architektura.inzynierka.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import static javafx.scene.input.KeyCode.T;

public class TasksServiceImpl implements TasksService{

    JdbcTemplate template;

    @Value("${spring.queries.tasks-add-query}")
    private String tasksAddAll;
    @Autowired
    private TasksRepository tasksRepository;

    @Override
    public Iterable<Tasks> findAll() {
        return this.tasksRepository.findAll();
    }



}
