package com.Aravind.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.ProjectRepository;
import com.Aravind.Service.ProjectService;
import com.Aravind.entity.Project;
@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository prepos;
	
	@Override
	public Project createProjects(Project pr) {
		return prepos.save(pr);
	}

	@Override
	public List<Project> getallprojects() {
		// TODO Auto-generated method stub
		return prepos.findAll();
	}

}
