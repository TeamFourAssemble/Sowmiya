package com.Aravind.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Aravind.entity.Project;
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{
	

}
