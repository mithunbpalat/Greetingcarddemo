package com.app.controller;

import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Greeting;
import com.app.service.EmailSenderService;

@RestController
@CrossOrigin("*")
public class EmailSenderController {
	
	@Autowired
	private EmailSenderService service;
	
	//@EventListener(ApplicationReadyEvent.class)
	public String getUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    String currentUserName = authentication.getName();
	    String user = System.getProperty("user.name");
	    return user;
	}

	
	@PostMapping(value="sendemail")
	public String triggerMail(@RequestBody Greeting greeting) {
	/*	service.sendSimpleEmail("springboot.email.palat@gmail.com", "This is the Email Body...", "This is the Email Subject");
		*/
		String a = greeting.getToEmail(); 
		String b = greeting.getBody();
		String c = greeting.getSubject();
		String d = greeting.getExtattachment();
		String f = getUser();
		String e = "C:\\Users\\"+ f +"\\Downloads\\"+greeting.getAttachment();
		System.out.println(getUser());
		try {
			service.sendEmailwithAttachment(a,
											b,
											c,
											d,
											e);
		} catch (MessagingException g) {
			// TODO Auto-generated catch block
			System.out.println(g);
		}
		return "Mail Send Successfully...";
	}
}
