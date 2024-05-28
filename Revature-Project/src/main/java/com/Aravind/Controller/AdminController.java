package com.Aravind.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Aravind.Service.AdminService;
import com.Aravind.Service.Pmanagerservice;
import com.Aravind.Service.ProjectService;
import com.Aravind.Service.ProjecttableService;
import com.Aravind.Service.RoleService;
import com.Aravind.Service.TaskService;
import com.Aravind.Service.TeamService;
import com.Aravind.entity.Admin;
import com.Aravind.entity.Pmanager;
import com.Aravind.entity.Project;
import com.Aravind.entity.Projecttable;
import com.Aravind.entity.Task;
import com.Aravind.entity.TeamMemb;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AdminController {
	@Autowired
    private AdminService adminService;
	@Autowired
	private Pmanagerservice pservice;
	@Autowired
	private TeamService tservice;
	@Autowired
	private ProjectService prservice;
	@Autowired
	private RoleService rservice;
	
	@Autowired
	private ProjecttableService ptservice;
	@Autowired
	private TaskService taskservice;
	
	
	@PostMapping("/admin/alogin")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        String role = rservice.getRoleByEmailAndPassword(email, password);
        if (role != null) {
            Map<String, String> response = new HashMap<>();
            response.put("role", role);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
	
    @PostMapping("/admin/register")
    public Admin registerUser(@RequestBody Admin admin) {
        return adminService.registerAdmin(admin);
    }

    @PostMapping("/admin/login")
    public ResponseEntity<Admin> loginUser(@RequestBody Admin admin) {
        Admin loggedInAdmin = adminService.loginAdmin(admin.getEmail(), admin.getPassword());
        if (loggedInAdmin != null) {
            return ResponseEntity.ok(loggedInAdmin); // Return logged in admin
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); // Return unauthorized status
        }
    }
    
    
    @PostMapping("/admin/paccount")
    public Pmanager regsiterProjectManager(@RequestBody Pmanager pm) {
        return pservice.registerPmanager(pm);
    }
    
    
    
    @PostMapping("/admin/tmember")
    public TeamMemb regsiterTeammember(@RequestBody TeamMemb tm) {
        return tservice.registerTeammemb(tm);
    }
    
    
    
    
    @GetMapping("/admin/listpmanagers")
    public List<Pmanager> getAllPmanagers() {
        return pservice.getallPmanagers();
    }
    
    @GetMapping("/admin/listteam")
    public List<TeamMemb> getAllteamMemebrs() {
        return tservice.getallTeamembers();
    }
    
    
    
    @PostMapping("/admin/projectcreate")
    public Project createProject(@RequestBody Project pr) {
        return prservice.createProjects(pr);
    }
    
    
    
    
    @GetMapping("/admin/listprojects")
    public List<Project> getAllProjects() {
        return prservice.getallprojects();
    }
    
    @PostMapping("/projectmanager/projectcreate")
    public  Projecttable projectablecreation(@RequestBody Projecttable pt) {
    	return ptservice.projecttableCreation(pt);
    }
    
    
    @GetMapping("/projectmanager/projectslist")
    public List<Projecttable> getallProjectslist()
    {
    	return ptservice.getlistprojects();
    }
    
    
    
    @PostMapping("/projectmanager/{teamMemberId}/tasks")
    public Task assignTaskToTeamMember(@PathVariable Integer teamMemberId, @RequestBody Task task) {
        TeamMemb teamMember = tservice.getById(teamMemberId);
        task.setTeamMember(teamMember);
        return tservice.addTask(task);
    }
    
    
    
    @PostMapping("/projectmanager/{projectId}/team-members")
    public TeamMemb addTeamMemberToProject(@PathVariable Integer projectId, @RequestBody TeamMemb teamMember) {
       Projecttable projectss = ptservice.getProjectById(projectId);
       teamMember.setProject(projectss);
       return tservice.registerTeammemb(teamMember);
   }

}
