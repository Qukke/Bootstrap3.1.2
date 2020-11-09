package com.example.demoboot.service;

import com.example.demoboot.model.Role;
import com.example.demoboot.repository.RoleRepository;
import org.springframework.stereotype.Service;

import javax.xml.ws.ServiceMode;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Set<Role> getAllRoles() {
        Iterable<Role> roles = roleRepository.findAll();
        Set<Role> set = new HashSet<>();
        roles.forEach(set::add);
        return set;
    }
}
