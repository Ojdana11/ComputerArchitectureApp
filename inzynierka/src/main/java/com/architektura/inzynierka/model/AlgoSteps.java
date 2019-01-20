package com.architektura.inzynierka.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class AlgoSteps implements Serializable{

    public Integer getId_algo_steps() {
        return id_algo_steps;
    }

    public void setId_algo_steps(Integer id_algo_steps) {
        this.id_algo_steps = id_algo_steps;
    }

    public String getAlgo_no() {
        return algo_no;
    }

    public void setAlgo_no(String algo_no) {
        this.algo_no = algo_no;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getSteps_no() {
        return steps_no;
    }

    public void setSteps_no(Integer steps_no) {
        this.steps_no = steps_no;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_algo_steps;
    private String algo_no;
    private String description;
    private String category;
    private Integer steps_no;


}

