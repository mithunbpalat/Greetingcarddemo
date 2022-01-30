package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.User;
import com.app.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping(value="postuser")
	public List<User> saveUser(@RequestBody User user){
		userService.saveUser(user);
		return userService.getAllUsers();
	}
	@PutMapping(value="updateuser")
	public List<User> updateUser(@RequestBody User user){
		userService.updateUser(user);
		return userService.getAllUsers();
	}
	@GetMapping(value="getallusers")
	public List<User> getAllUser(){
		return userService.getAllUsers();
	}
	@DeleteMapping(value="deleteuserbyid")
	public List<User> deleteUser(@RequestParam int uid){
		userService.deleteUser(uid);
		return userService.getAllUsers();
	}
	@GetMapping(value="getuserbyid")
	public User getUserById(@RequestParam int uid){
		return userService.findUserByUid(uid);
	}
	@GetMapping(value="getuserbyusername")
	public User getUserByUsername(@RequestParam String username){
		return userService.findUserByUsername(username);		
	}
}
