package com.example.demoboot.repository;

import com.example.demoboot.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByName(String name);
    void deleteById(Long id);
    Optional<User> findById(Long id);
}
