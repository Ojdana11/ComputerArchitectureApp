package com.architektura.inzynierka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Base64;

@SpringBootApplication
@EnableAsync
public class InzynierkaApplication {


	public static void main(String[] args) {
		SpringApplication.run(InzynierkaApplication.class, args);
		String pw_hash = BCrypt.hashpw("admin111", BCrypt.gensalt());

		System.out.println(pw_hash);
	}

}
