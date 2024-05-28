package com.Aravind.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Aravind.Repository.TaskRepository;
import com.Aravind.Service.TaskService;
import com.Aravind.entity.Task;
@Service
public class TaskServiceImpl implements TaskService{
	@Autowired
	private TaskRepository taskrepo;
	@Override
	public Task addTadk(Task t) {
		return taskrepo.save(t);
	}
	@Override
	public List<Task> getAllTasks() {
		
		return taskrepo.findAll();
	}

}
