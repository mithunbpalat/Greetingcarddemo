package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.model.FileDB1;

@Repository
@Transactional
public interface FileDBRepository1 extends JpaRepository<FileDB1, String> {
	
	@Modifying
	@Query("DELETE FROM FileDB1 d WHERE d.name = :name")
	int deleteByName(String name);
}
