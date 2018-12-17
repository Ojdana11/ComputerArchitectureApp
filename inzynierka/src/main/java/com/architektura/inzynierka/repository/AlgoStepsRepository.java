package com.architektura.inzynierka.repository;

import com.architektura.inzynierka.model.AlgoSteps;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AlgoStepsRepository extends CrudRepository<AlgoSteps, Long> {

}
