package com.example.demoboot.service;

import com.example.demoboot.model.Role;
import com.example.demoboot.repository.RoleRepository;

import java.util.List;
import java.util.Set;

public interface RoleService {
    Set<Role> getAllRoles();
}
