package pwr.psi.Powierzenia3000.entrustment.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.entrustment.model.Entrustment

interface EntrustmentRepository : JpaRepository<Entrustment, Long> {
    fun findEntrustmentById(id: Long): Entrustment?
}