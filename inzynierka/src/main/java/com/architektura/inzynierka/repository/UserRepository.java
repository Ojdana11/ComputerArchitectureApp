package com.architektura.inzynierka.repository;

import com.architektura.inzynierka.model.User;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    User findByToken(String token);
}
