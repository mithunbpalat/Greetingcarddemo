package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_table", catalog="greetingcarddemodatabase")
public class User {
     @Id
     @GeneratedValue(strategy= GenerationType.AUTO)
	 private int uid;
     private String username;
     private String email;
     private String password;
     private String address;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int uid, String username, String email, String password, String address) {
		super();
		this.uid = uid;
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
     
     
}
