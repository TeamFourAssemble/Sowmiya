package com.Aravind.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.ProjectableRepository;
import com.Aravind.Service.ProjectService;
import com.Aravind.Service.ProjecttableService;
import com.Aravind.entity.Project;
import com.Aravind.entity.Projecttable;
@Service
public class ProjecttableServiceImpl implements ProjecttableService{
	@Autowired
	private ProjectableRepository ptrepo;

	
	public Projecttable projecttableCreation(Projecttable prr) {
		// TODO Auto-generated method stub
		return ptrepo.save(prr);
	}


	@Override
	public List<Projecttable> getlistprojects() {
		// TODO Auto-generated method stub
		return ptrepo.findAll();
	}


	@Override
	public Projecttable getProjectById(Integer projectId) {
		// TODO Auto-generated method stub
		return ptrepo.findById(projectId).orElse(null);
	}


	

	

}
