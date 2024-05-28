package com.Aravind.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.TaskRepository;
import com.Aravind.Repository.TeamMembRepository;
import com.Aravind.Service.TeamService;
import com.Aravind.entity.Pmanager;
import com.Aravind.entity.Task;
import com.Aravind.entity.TeamMemb;
@Service
public class TeamServiceimpl implements TeamService{
	
	@Autowired
	private TeamMembRepository trepo;
	@Autowired
	private TaskRepository taskrepo; 

	@Override
	public TeamMemb registerTeammemb(TeamMemb teammemb) {
		 if (trepo.findByEmail(teammemb.getEmail()) != null) {
	            throw new RuntimeException("User with this email already exists");
	        }
	        return trepo.save(teammemb);
	}

	@Override
	public TeamMemb loginTeammeb(String email, String password) {
        return trepo.findByEmailAndPassword(email, password);

	}

	@Override
	public List<TeamMemb> getallTeamembers() {
			
			return trepo.findAll();
		
	}

	
	@Override
	public Task addTask(Task task) {
		// TODO Auto-generated method stub
		return taskrepo.save(task);
	}

	@Override
	public TeamMemb getById(Integer teamMemberId) {
		// TODO Auto-generated method stub
		return trepo.findById(teamMemberId).orElse(null);
	}

	

}
