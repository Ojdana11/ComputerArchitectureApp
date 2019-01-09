package com.architektura.inzynierka.service;

import com.architektura.inzynierka.model.Tasks;

import java.util.List;

public interface TasksService {

    Iterable<Tasks> findAll();
    //Iterable<Tasks> findAllAdd();

}
