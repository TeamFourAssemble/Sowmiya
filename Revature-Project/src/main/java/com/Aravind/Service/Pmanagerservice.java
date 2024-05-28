package com.Aravind.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Aravind.entity.Pmanager;
@Service
public interface Pmanagerservice {
    Pmanager registerPmanager(Pmanager pmanager);
    Pmanager loginPmanager(String email, String password);
    
    public List<Pmanager> getallPmanagers();
}
