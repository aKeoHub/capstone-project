package com.project.capstone.parkdocument;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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

/**
 * Entity class representing the SQL Document Table
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Entity
@Table(name = "park_document")
@RequiredArgsConstructor
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "document_id", resolver = EntityIdResolver.class, scope = ParkDocument.class)
@JsonSerialize(as = ParkDocument.class)
@JsonDeserialize(as = ParkDocument.class)
public class ParkDocument implements Serializable {

    /**
     * SQL Column and Primary Key
     */
    @Id
    @Column(name = "document_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer documentId;

    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "document_category", referencedColumnName = "category_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private Category documentCategory;

    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id", referencedColumnName = "user_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    @JsonBackReference("docs")
    private User creatorId;

    /**
     * SQL Column
     */
    @Column(name = "document_name", nullable = false, length = 30)
    private String documentName;

    /**
     * SQL Column
     */
    @Column(name = "create_date")
    private LocalDate createDate;

    /**
     * SQL Column
     */
    @Column(name = "description", nullable = false, length = 120)
    private String description;

    /**
     * SQL Column
     */
    @Lob
    @Column(name = "file")
    private byte[] file;

    /**
     * SQL Column
     */
    @OneToMany(mappedBy = "parkDocument", cascade = CascadeType.ALL)
    @JsonIgnore
    @ToString.Exclude
    private List<AuditLog> auditLogs = new ArrayList<>();

    /**
     * Required args Constructor assisting in Spring Annotations
     * @param documentId
     * @param documentCategory
     * @param creatorId
     * @param documentName
     * @param createDate
     * @param description
     * @param file
     */
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

    /**
     * Getter for Audit logs
     * @return auditLogs
     */
    public List<AuditLog> getAuditLogs() {
        return auditLogs;
    }

    /**
     * Setter for Audit logs
     * @param auditLogs
     */
    public void setAuditLogs(List<AuditLog> auditLogs) {
        this.auditLogs = auditLogs;
    }

    /**
     * Getter for file
     * @return file
     */
    public byte[] getFile() {
        return file;
    }

    /**
     * Setter for file
     * @param file
     */
    public void setFile(byte[] file) {
        this.file = file;
    }

    /**
     * Getter for document description
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Setter for document description
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Getter for document createDate
     * @return createDate
     */
    public LocalDate getCreateDate() {
        return createDate;
    }

    /**
     * Setter for document createDate
     * @param createDate
     */
    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    /**
     * Getter for document name
     * @return documentName
     */
    public String getDocumentName() {
        return documentName;
    }

    /**
     * Setter for document name
     * @param documentName
     */
    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    /**
     * Getter for document creatorId
     * @return creatorId
     */
    public User getCreatorId() {
        return creatorId;
    }

    /**
     * Setter for document creatorId
     * @param creatorId
     */
    public void setCreatorId(User creatorId) {
        this.creatorId = creatorId;
    }

    /**
     * Getter for document category
     * @return documentCategory
     */
    public Category getDocumentCategory() {
        return documentCategory;
    }

    /**
     * Setter for document category
     * @param documentCategory
     */
    public void setDocumentCategory(Category documentCategory) {
        this.documentCategory = documentCategory;
    }

    /**
     * Getter for document id
     * @return documentId
     */
    public Integer getDocumentId() {
        return documentId;
    }

    /**
     * Setter for document id
     * @param id
     */
    public void setDocumentId(Integer id) {
        this.documentId = id;
    }
}
