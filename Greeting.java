package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mail")
public class Greeting {
	@Id
	private String toEmail;
	private String body;
	private String subject;
	private String extattachment;
    private String attachment;
	public Greeting() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Greeting(String toEmail, String body, String subject, String extattachment, String attachment) {
		super();
		this.toEmail = toEmail;
		this.body = body;
		this.subject = subject;
		this.extattachment = extattachment;
		this.attachment = attachment;
	}
	public String getToEmail() {
		return toEmail;
	}
	public void setToEmail(String toEmail) {
		this.toEmail = toEmail;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getExtattachment() {
		return extattachment;
	}
	public void setExtattachment(String extattachment) {
		this.extattachment = extattachment;
	}
	public String getAttachment() {
		return attachment;
	}
	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}
    
    
}
