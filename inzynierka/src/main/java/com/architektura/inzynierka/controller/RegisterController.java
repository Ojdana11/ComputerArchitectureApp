package com.architektura.inzynierka.controller;

import com.architektura.inzynierka.model.User;
import com.architektura.inzynierka.model.UserRegistrationDto;
import com.architektura.inzynierka.repository.UserRepository;
import com.architektura.inzynierka.service.EmailService;
import com.architektura.inzynierka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Map;

@Controller
public class RegisterController {

    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;
    @ModelAttribute("userDto")
    public UserRegistrationDto userRegistrationDto() {
        return new UserRegistrationDto();
    }

  @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        return "register";
    }

    @PostMapping("/register")
    public String registerUserAccount(@ModelAttribute("userDto") @Valid UserRegistrationDto userDto,
                                      BindingResult result, HttpServletRequest request){

        User existing = userService.findByEmail(userDto.getEmail());
        if (existing != null){
            result.rejectValue("email", null, "Instnieje konto o podanym adresie email");
        }
        if (result.hasErrors()){
            return "register";
        }

       User user =  userService.save(userDto);
        String appUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();

        SimpleMailMessage registrationEmail = new SimpleMailMessage();
        registrationEmail.setTo(userDto.getEmail());
        registrationEmail.setSubject("Registration Confirmation");
        registrationEmail.setText("To confirm your e-mail address, please click the link below:\n"
                + appUrl + "/confirm?token=" + user.getToken());
        registrationEmail.setFrom("noreply@domain.com");

        emailService.sendEmail(registrationEmail);
        return "redirect:/register?success";
    }

    @GetMapping("/confirm")
    public String showConfirmationForm(@RequestParam Map requestParams,
                                       BindingResult result){
        User user = userService.findByToken(requestParams.get("token").toString());
        if (user == null){
            result.rejectValue("email", null, "ink weryfikacyjny jest błędny");
        }
        if (result.hasErrors()){
            return "redirect:/confirm?fail";
        }

        user.setEnabled(true);
        return "redirect:/confirm?success";
    }
}
