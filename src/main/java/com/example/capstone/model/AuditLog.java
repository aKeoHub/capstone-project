package com.example.capstone.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "audit_log")
public class AuditLog {
    @EmbeddedId
    private AuditLogId id;

    @MapsId("documentId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_id")
    private ParkDocument parkDocument;

    @Column(name = "creater_id", nullable = false)
    private Integer createrId;

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

    public Integer getCreaterId() {
        return createrId;
    }

    public void setCreaterId(Integer createrId) {
        this.createrId = createrId;
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