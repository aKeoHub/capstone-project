package com.project.capstone.parkdocument;

import com.fasterxml.jackson.annotation.*;
import com.project.capstone.EntityIdResolver;
import com.project.capstone.audit.AuditLog;
import com.project.capstone.category.Category;
import com.project.capstone.user.User;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "park_document")
@RequiredArgsConstructor
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "documentId", resolver = EntityIdResolver.class, scope = ParkDocument.class)
public class ParkDocument implements Serializable {

    @Id
    @Column(name = "document_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer documentId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "document_category", referencedColumnName = "category_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private Category documentCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id", referencedColumnName = "user_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private User creatorId;

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
    private List<AuditLog> auditLogs = new ArrayList<>();


    public ParkDocument(@JsonProperty("document_id") Integer documentId,
                        @JsonProperty("document_category") Category documentCategory,
                        @JsonProperty("creator_id") User creatorId,
                        @JsonProperty("document_name") String documentName,
                        @JsonProperty("create_date") LocalDate createDate,
                        @JsonProperty("description") String description,
                        @JsonProperty("file") byte[] file) {
        this.documentId = documentId;
        this.documentCategory=documentCategory;
        this.creatorId = creatorId;
        this.documentName = documentName;
        this.createDate = createDate;
        this.description = description;
        this.file = file;
    }

    public List<AuditLog> getAuditLogs() {
        return auditLogs;
    }

    public void setAuditLogs(List<AuditLog> auditLogs) {
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

    public User getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(User creatorId) {
        this.creatorId = creatorId;
    }

    public Category getDocumentCategory() {
        return documentCategory;
    }

    public void setDocumentCategory(Category documentCategory) {
        this.documentCategory = documentCategory;
    }

    public Integer getDocumentId() {
        return documentId;
    }

    public void setDocumentId(Integer id) {
        this.documentId = id;
    }
}
