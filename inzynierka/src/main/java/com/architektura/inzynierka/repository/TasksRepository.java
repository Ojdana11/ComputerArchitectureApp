package com.architektura.inzynierka.repository;

import com.architektura.inzynierka.model.Tasks;
import org.springframework.data.repository.CrudRepository;

public interface TasksRepository extends CrudRepository<Tasks, Long> {

}
