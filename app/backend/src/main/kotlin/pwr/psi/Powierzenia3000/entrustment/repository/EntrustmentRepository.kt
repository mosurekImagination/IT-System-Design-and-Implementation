package pwr.psi.Powierzenia3000.entrustment.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.shared.model.Entrustment
import pwr.psi.Powierzenia3000.shared.model.EntrustmentStatus
import pwr.psi.Powierzenia3000.shared.model.Lecturer

interface EntrustmentRepository : JpaRepository<Entrustment, Long> {
    fun findEntrustmentById(id: Long): Entrustment?

    fun findEntrustmentsByEntrustmentStatus(status: EntrustmentStatus): List<Entrustment>?

    fun findEntrustmentsByLecturerIsNull(): List<Entrustment>?

    fun findEntrustmentByLecturer(lecturer: Lecturer): List<Entrustment>?
}