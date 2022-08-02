package com.project.capstone.parkdocument.file;

public class FileInfo {
    private Integer fileId;
    private String name;
    private String url;
    public FileInfo(String name, String url, Integer fileId) {
        this.fileId = fileId;
        this.name = name;
        this.url = url;
    }

    public Integer getFileId() {
        return fileId;
    }

    public void setFileId(Integer fileId) {
        this.fileId = fileId;
    }

    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getUrl() {
        return this.url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
}
