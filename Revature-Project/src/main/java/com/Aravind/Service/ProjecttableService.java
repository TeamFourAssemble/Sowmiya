package com.Aravind.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Aravind.entity.Project;
import com.Aravind.entity.Projecttable;
@Service
public interface ProjecttableService {
	
	Projecttable projecttableCreation(Projecttable pr);
	
	public List<Projecttable> getlistprojects();


	Projecttable getProjectById(Integer projectId);

	

}
