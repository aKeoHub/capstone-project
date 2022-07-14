package com.sait.capstone.model;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class AuditLogId implements Serializable {
    private static final long serialVersionUID = -2238440107078168984L;
    @Column(name = "log_id", nullable = false)
    private Integer logId;

    @Column(name = "document_id", nullable = false)
    private Integer documentId;

    public Integer getLogId() {
        return logId;
    }

    public void setLogId(Integer logId) {
        this.logId = logId;
    }

    public Integer getDocumentId() {
        return documentId;
    }

    public void setDocumentId(Integer documentId) {
        this.documentId = documentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        AuditLogId entity = (AuditLogId) o;
        return Objects.equals(this.logId, entity.logId) &&
                Objects.equals(this.documentId, entity.documentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(logId, documentId);
    }

}