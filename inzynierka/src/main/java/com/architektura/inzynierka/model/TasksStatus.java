package com.architektura.inzynierka.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TasksStatus {

    @Id
    private Integer id_task;
    private Integer id_user;
    private Integer status;

    public Integer getId_task() {
        return id_task;
    }

    public void setId_task(Integer id_task) {
        this.id_task = id_task;
    }

    public Integer getId_user() {
        return id_user;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
