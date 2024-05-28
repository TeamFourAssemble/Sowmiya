package com.Aravind.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.AdminRepository;
import com.Aravind.Service.AdminService;
import com.Aravind.entity.Admin;
@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminrepo;
	
	 

	 public Admin registerAdmin(Admin admin) {
	        if (adminrepo.findByEmail(admin.getEmail()) != null) {
	            throw new RuntimeException("User with this email already exists");
	        }
	        return adminrepo.save(admin);
	    }

	 @Override
	    public Admin loginAdmin(String email, String password) {
	        return adminrepo.findByEmailAndPassword(email, password);
	    }
	
}
