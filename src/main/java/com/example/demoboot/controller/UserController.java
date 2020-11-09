package com.example.demoboot.controller;

import com.example.demoboot.model.Role;
import com.example.demoboot.model.User;
import com.example.demoboot.service.RoleService;
import com.example.demoboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import sun.nio.ch.SelectorProviderImpl;

import java.util.HashSet;
import java.util.Set;

@Controller
public class UserController {

	@GetMapping(value = "/user")
	public String user(){
		return "/userpage";
	}
	@GetMapping(value = "/")
	public String admin(){ return "/admin";	}
//
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public String helloPage() {
//		return "admin";
//	}
//
//	@RequestMapping(value = "/admin", method = RequestMethod.GET)
//	public String listUsers(ModelMap model) {
//		return "/admin";
//	}
//
//	@PostMapping(value = "/add")
//	public String addUser(@ModelAttribute("user") User user) {
//
//		return "redirect:/admin";
//	}
//
//	@PostMapping("/remove")
//	public String removeUser(@RequestParam("id") Long id) {
//		return "redirect:/admin";
//	}
//
//	@PostMapping(value = "/edit")
//	public String edit(@ModelAttribute("user") User user) {
//		return "redirect:/admin";
//	}
//

	/*
	@GetMapping(value = "/userpage")
	public String show(ModelMap modelMap) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findByName(auth.getName());
		modelMap.addAttribute("user", user);
		return "/userpage";
	}*/
}
