package com.Aravind.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Aravind.entity.Task;

@Service
public interface TaskService {
	Task addTadk(Task t);
	public List<Task> getAllTasks();
}
