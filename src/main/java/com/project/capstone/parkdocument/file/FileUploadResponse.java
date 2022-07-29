package com.project.capstone.parkdocument.file;

public class FileUploadResponse {
    private String fileName;
    private String downloadUri;
    private long size;

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    private byte[] file;
    public String getFileName() {
        return fileName;
    }

    public FileUploadResponse() {
    }

    public void setFileName(String file) {
        this.fileName = file;
    }

    public String getDownloadUri() {
        return downloadUri;
    }

    public void setDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}
