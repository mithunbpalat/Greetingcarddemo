package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.dao.UserRepository;
import com.app.model.User;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}
	public void deleteUser(int uid) {
		userRepository.deleteById(uid);
	}
	public User findUserByUid(int uid) {
		return userRepository.findById(uid).get();
	}
	public User findUserByUsername(String username) {
		return userRepository.findByUsername(username);
	}
}
