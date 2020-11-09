package com.example.demoboot.controller;

import com.example.demoboot.model.Role;
import com.example.demoboot.model.User;
import com.example.demoboot.service.RoleService;
import com.example.demoboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
public class UserRestController {
    private final UserService userService;
    private final RoleService roleService;

//    @Autowired
    public UserRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @RequestMapping(value = "/listUsers", method = RequestMethod.GET)
    public ResponseEntity<Iterable<User>> listUsers() {
//        public List<User> listUsers() {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        User user = userService.findByName(auth.getName());
//        model.addAttribute("authUser", user);
//        model.addAttribute("listUsers", this.userService.listUsers());
//        model.addAttribute("user", new User());
//        Set<Role> allRoles = roleService.getAllRoles();
//        model.addAttribute("allRoles", allRoles);
        return ResponseEntity.ok().body(userService.listUsers());
//        return userService.listUsers();
    }


    @PostMapping(value = "/add")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        userService.add(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> removeUser(@PathVariable("id") Long id) {
//        User user = userService.getUserById(id);
        this.userService.removeById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PutMapping(value = "/edit")
    public ResponseEntity<User> edit(@RequestBody User user) {
        userService.edit(user);
        return ResponseEntity.ok()
                .body(user);
    }



    @GetMapping(value = "/userpage")
    public ResponseEntity<User> show() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByName(auth.getName());
        return ResponseEntity.ok()
                .body(user);
    }

    @GetMapping(value = "/getRoles")
//    @ResponseBody
    public ResponseEntity<Set<Role>> getRoles(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByName(auth.getName());
        return ResponseEntity.ok()
                .body(user.getRoles());
    }

    @GetMapping(value = "/getById/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") Long id){
        User user = userService.getUserById(id);
        return ResponseEntity.ok().body(user);
    }



}
