package com.architektura.inzynierka.repository;

import com.architektura.inzynierka.model.TasksStatus;
import org.springframework.data.repository.CrudRepository;

public interface TasksStatusRepository extends CrudRepository<TasksStatus, Long> {
}
