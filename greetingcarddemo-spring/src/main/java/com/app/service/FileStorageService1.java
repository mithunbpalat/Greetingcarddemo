package com.app.service;


import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.model.FileDB1;
import com.app.dao.FileDBRepository1;

@Service
public class FileStorageService1 {

  @Autowired
  private FileDBRepository1 fileDBRepository;

  public FileDB1 store(MultipartFile file) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    FileDB1 FileDB = new FileDB1(fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(FileDB);
  }

  public FileDB1 getFile(String id) {
    return fileDBRepository.findById(id).get();
  }
  
  public Stream<FileDB1> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }
  
  public void deleteFile(String name) {
	  fileDBRepository.deleteByName(name);
  }
}