package com.Aravind.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.PmanagerRepository;
import com.Aravind.Service.Pmanagerservice;
import com.Aravind.entity.Pmanager;
@Service
public class PmanagerServiceImpl implements Pmanagerservice{
	@Autowired
	private PmanagerRepository prepo;

	@Override
	public Pmanager registerPmanager(Pmanager pm) {
		 if (prepo.findByEmail(pm.getEmail()) != null) {
	            throw new RuntimeException("User with this email already exists");
	        }
	        return prepo.save(pm);
	}

	@Override
	public Pmanager loginPmanager(String email, String password) {
        return prepo.findByEmailAndPassword(email, password);

	}

	public List<Pmanager> getallPmanagers() {
		
		return prepo.findAll();
	}
	
	

}
