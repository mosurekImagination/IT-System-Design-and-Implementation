package pwr.psi.Powierzenia3000.entrustment.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.shared.model.Entrustment
import pwr.psi.Powierzenia3000.shared.model.EntrustmentStatus

interface EntrustmentRepository : JpaRepository<Entrustment, Long> {
    fun findEntrustmentById(id: Long): Entrustment?

    fun findEntrustmentByEntrustmentStatus(answer: EntrustmentStatus): Entrustment
}