package com.Aravind.Service;

import org.springframework.stereotype.Service;

import com.Aravind.entity.Admin;
@Service
public interface AdminService {
	 Admin registerAdmin(Admin admin);
	  Admin loginAdmin(String email, String password);
}
