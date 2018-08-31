package com.architektura.inzynierka.model;


import com.architektura.inzynierka.utils.NumberSystem;

import javax.validation.constraints.NotNull;

public class Calculator {

    @NotNull
    Integer currentBase;
    @NotNull
    Integer targetBase;
    @NotNull
    Integer totalPart;
    @NotNull
    Integer fraction;

    NumberSystem currentSystem;
    NumberSystem targetSystem;
    @NotNull
    Integer load;

    public Integer getCurrentBase() {
        return currentBase;
    }

    public void setCurrentBase(Integer currentBase) {
        this.currentBase = currentBase;
    }

    public Integer getTargetBase() {
        return targetBase;
    }

    public void setTargetBase(Integer targetBase) {
        this.targetBase = targetBase;
    }

    public Integer getTotalPart() {
        return totalPart;
    }

    public void setTotalPart(Integer totalPart) {
        this.totalPart = totalPart;
    }

    public Integer getFraction() {
        return fraction;
    }

    public void setFraction(Integer fraction) {
        this.fraction = fraction;
    }

    public NumberSystem getCurrentSystem() {
        return currentSystem;
    }

    public void setCurrentSystem(NumberSystem currentSystem) {
        this.currentSystem = currentSystem;
    }

    public NumberSystem getTargetSystem() {
        return targetSystem;
    }

    public void setTargetSystem(NumberSystem targetSystem) {
        this.targetSystem = targetSystem;
    }

    public Integer getLoad() {
        return load;
    }

    public void setLoad(Integer load) {
        this.load = load;
    }
}
