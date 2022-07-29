package com.project.capstone.parkdocument.file;


import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {

    @RequestMapping(value="/api/v1/uploadFile", method = RequestMethod.POST)
    public ResponseEntity<FileUploadResponse> uploadFile(
            @RequestParam("file") MultipartFile multipartFile)
            throws IOException {

        byte[] bytes = multipartFile.getBytes();
        FileOutputStream fileOutputStream = new FileOutputStream((File) multipartFile);

        String file = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        long size = multipartFile.getSize();

        String filecode = FileUploadUtil.saveFile(file, multipartFile);
        fileOutputStream.write(bytes);
        fileOutputStream.close();
        FileUploadResponse response = new FileUploadResponse();
        response.setFileName(file);
        response.setSize(size);
        response.setDownloadUri("/api/v1/downloadFile/" + filecode);
        response.setFile(bytes);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
