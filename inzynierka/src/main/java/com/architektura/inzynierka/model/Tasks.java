package com.architektura.inzynierka.model;

import javax.persistence.Entity;
<<<<<<< HEAD
import javax.persistence.Id;

@Entity
public class Tasks {

    @Id
    private Integer id_task;
    private String question;
    private String answer;
=======
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Tasks implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_task;
    private String question;
    private String answer;
    private String category;
>>>>>>> V2-Thyme

    public Integer getId_task() {
        return id_task;
    }

    public void setId_task(Integer id_task) {
        this.id_task = id_task;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
<<<<<<< HEAD
=======

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
>>>>>>> V2-Thyme
}
