package com.architektura.inzynierka.model;

import javax.validation.constraints.NotEmpty;

public class TaskDto {

    @NotEmpty(message = "Proszę wpisać pytanie")
    private String answer;

    @NotEmpty(message = "Proszę wpisać odpowiedź")
    private String question;

    @NotEmpty(message = "Proszę wpisać kategorie")
    private String category;

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
