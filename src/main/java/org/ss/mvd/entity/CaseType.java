/*
 * The MIT License
 *
 * Copyright 2018 ss.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.ss.mvd.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Case type.
 * @author ss
 */
@Entity
@Table(name = "mvd_case_type")
public class CaseType implements Serializable {
    /** Default UID. */
    private static final long serialVersionUID = 1L;
// ============================== FIELDS ======================================
    /** ID. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /** Type name. */
    @NotNull
    @Size(max = 100)
    @Column(name = "name", length = 100)
    private String name;
    /**
     * Days before case expiration date,
     * when user should get notification.
     */
    @Column(name = "days_for_notification")
    private Integer daysForNotification;
    /** Period of execution. */
    @NotNull
    @Column(name = "period_of_execution", nullable = false)
    private Integer periodOfExecution;
// ============================== SET & GET ===================================
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }
    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * @return the daysForNotification
     */
    public Integer getDaysForNotification() {
        return daysForNotification;
    }
    /**
     * @param daysForNotification the daysForNotification to set
     */
    public void setDaysForNotification(Integer daysForNotification) {
        this.daysForNotification = daysForNotification;
    }
    /**
     * @return the periodOfExecution
     */
    public Integer getPeriodOfExecution() {
        return periodOfExecution;
    }
    /**
     * @param periodOfExecution the periodOfExecution to set
     */
    public void setPeriodOfExecution(Integer periodOfExecution) {
        this.periodOfExecution = periodOfExecution;
    }
// ============================================================================
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (getId() != null ? getId().hashCode() : 0);
        return hash;
    }
    @Override
    public boolean equals(Object object) {
        if (!(object instanceof CaseType)) {
            return false;
        }
        CaseType other = (CaseType) object;
        return !((this.id == null && other.id != null)
                || (this.id != null && !this.id.equals(other.id)));
    }
    @Override
    public String toString() {
        return "org.ss.mvd.entity.CaseType[ id=" + getId() + " ]";
    }
}
