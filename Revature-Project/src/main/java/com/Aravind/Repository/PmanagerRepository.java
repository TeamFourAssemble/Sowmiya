package com.Aravind.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Aravind.entity.Pmanager;

@Repository
public interface PmanagerRepository extends JpaRepository<Pmanager, Integer> {
    Pmanager findByEmail(String email);
    Pmanager findByEmailAndPassword(String email, String password);
}
