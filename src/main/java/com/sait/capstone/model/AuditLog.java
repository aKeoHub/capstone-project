package com.sait.capstone.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(schema = "capstonedb" , name = "audit_log")
@RequiredArgsConstructor
public class AuditLog {
    @EmbeddedId
    private AuditLogId id;

    @MapsId("documentId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_id")
    private ParkDocument parkDocument;

    @Column(name = "creator_id", nullable = false)
    private Integer creatorId;

    @Column(name = "modified_by", nullable = false)
    private Integer modifiedBy;

    @Column(name = "reason", nullable = false, length = 72)
    private String reason;

    @Column(name = "action", nullable = false, length = 20)
    private String action;

    @Column(name = "description", nullable = false, length = 120)
    private String description;

    @Column(name = "create_date")
    private LocalDate createDate;

    public AuditLog(@JsonProperty("log_id") AuditLogId id,
                    @JsonProperty("document_id") ParkDocument parkDocument,
                    @JsonProperty("creator_id") Integer creatorId,
                    @JsonProperty("modified_by") Integer modifiedBy,
                    @JsonProperty("reason") String reason,
                    @JsonProperty("action") String action,
                    @JsonProperty("description") String description,
                    @JsonProperty("create_date") LocalDate createDate) {
        this.id = id;
        this.parkDocument = parkDocument;
        this.creatorId = creatorId;
        this.modifiedBy = modifiedBy;
        this.reason = reason;
        this.action = action;
        this.description = description;
        this.createDate = createDate;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Integer getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(Integer modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public Integer getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Integer creatorId) {
        this.creatorId = creatorId;
    }

    public AuditLogId getId() {
        return id;
    }

    public void setId(AuditLogId id) {
        this.id = id;
    }

    public ParkDocument getParkDocument() {
        return parkDocument;
    }

    public void setParkDocument(ParkDocument parkDocument) {
        this.parkDocument = parkDocument;
    }


}