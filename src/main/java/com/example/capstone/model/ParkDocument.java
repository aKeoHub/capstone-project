package com.example.capstone.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(schema = "capstonedb" , name = "park_document")
public class ParkDocument {

    @Id
    @Column(name = "document_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "document_category", nullable = false)
    private Category documentCategory;

    @Column(name = "creater_id", nullable = false)
    private Integer createrId;

    @Column(name = "document_name", nullable = false, length = 30)
    private String documentName;

    @Column(name = "create_date")
    private LocalDate createDate;

    @Column(name = "description", nullable = false, length = 120)
    private String description;

    @Column(name = "file")
    private byte[] file;

    @OneToMany(mappedBy = "parkDocument")
    private Set<AuditLog> auditLogs = new LinkedHashSet<>();

    public Set<AuditLog> getAuditLogs() {
        return auditLogs;
    }

    public void setAuditLogs(Set<AuditLog> auditLogs) {
        this.auditLogs = auditLogs;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    public Integer getCreaterId() {
        return createrId;
    }

    public void setCreaterId(Integer createrId) {
        this.createrId = createrId;
    }

    public Category getDocumentCategory() {
        return documentCategory;
    }

    public void setDocumentCategory(Category documentCategory) {
        this.documentCategory = documentCategory;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
