package com.architektura.inzynierka.model;

import javax.validation.constraints.NotEmpty;

public class AlgoStepsDto {

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Integer getSteps_no() {
        return steps_no;
    }

    public void setSteps_no(Integer steps_no) {
        this.steps_no = steps_no;
    }

    @NotEmpty(message = "Proszę podać krok")
    private String description;

    private Integer steps_no;
}
