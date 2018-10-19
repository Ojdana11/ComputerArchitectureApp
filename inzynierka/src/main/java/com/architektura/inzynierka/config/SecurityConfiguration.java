package com.architektura.inzynierka.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
<<<<<<< HEAD
import org.springframework.context.annotation.Configuration;
=======
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
>>>>>>> V2-Thyme
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

<<<<<<< HEAD

=======
    @Autowired
    private LoggingAccessDeniedHandler accessDeniedHandler;
>>>>>>> V2-Thyme
    @Qualifier("dataSource")
    @Autowired
    private DataSource dataSource;

    @Value("${spring.queries.users-query}")
    private String usersQuery;

    @Value("${spring.queries.roles-query}")
    private String rolesQuery;

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
<<<<<<< HEAD
        auth.
                jdbcAuthentication()
=======
        auth
                .jdbcAuthentication()
>>>>>>> V2-Thyme
                .usersByUsernameQuery(usersQuery)
                .authoritiesByUsernameQuery(rolesQuery)
                .dataSource(dataSource)
                .passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.
                authorizeRequests()
<<<<<<< HEAD
                .antMatchers("/").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/registry").permitAll()
                .antMatchers("/admin/**").hasAuthority("admin")
                .antMatchers("/user/all").hasAuthority("admin")
                .antMatchers("/user/**").hasAuthority("user").anyRequest()
                .authenticated()
                    .and().csrf().disable().formLogin()
=======
                .antMatchers(
                        "/",
                        "/register/**","/confirm","/task/**","/login",
                        "/calculator","/materials/**","/materials",
                        "/js/**","/css/**","/img/**",
                        "/webjars/**").permitAll()
                .antMatchers("/admin/**").hasAuthority("ADMIN")
                .antMatchers("/user/**").hasAuthority("USER")
                .antMatchers("/history").hasAuthority("USER")
                .anyRequest()
                .authenticated()
                .and().csrf().disable().formLogin()
>>>>>>> V2-Thyme
                .loginPage("/login")
                .defaultSuccessUrl("/")
                .usernameParameter("email")
                .passwordParameter("password")
<<<<<<< HEAD
                    .and()
=======
                .and()
>>>>>>> V2-Thyme
                .logout()
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
<<<<<<< HEAD
                .logoutSuccessUrl("/").and()
                                .exceptionHandling()
                .accessDeniedPage("/access-denied");
    }

=======
                .logoutSuccessUrl("/login?logout")
                .and().exceptionHandling()
                .accessDeniedHandler(accessDeniedHandler);
    }


>>>>>>> V2-Thyme
}
