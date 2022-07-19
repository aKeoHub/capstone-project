package com.project.capstone.parkdocument;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.project.capstone.audit.AuditLog;
import com.project.capstone.category.Category;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(schema = "capstonedb" , name = "park_document")
@RequiredArgsConstructor
@ToString
public class ParkDocument {

    @Id
    @Column(name = "document_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "document_category", nullable = false)
    @ToString.Exclude
    private Category documentCategory;

    @Column(name = "creator_id", nullable = false)
    private Integer creatorId;

    @Column(name = "document_name", nullable = false, length = 30)
    private String documentName;

    @Column(name = "create_date")
    private LocalDate createDate;

    @Column(name = "description", nullable = false, length = 120)
    private String description;

    @Column(name = "file")
    private byte[] file;

    @OneToMany(mappedBy = "parkDocument")
    @ToString.Exclude
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

    public Integer getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Integer creatorId) {
        this.creatorId = creatorId;
    }
    @JsonBackReference
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
