package com.Aravind.entity;

import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.Data;

@Data
@Entity
public class Admin {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
	
	private String name;
	
	private String phone;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	private String password;
	@Value("${admin.default.role:Admin}") // Using a fallback default value
    private String role;
 
 @PrePersist
    public void prePersist() {
        if (role == null || role.isEmpty()) {
            role = "Admin";
        }
    }
}
