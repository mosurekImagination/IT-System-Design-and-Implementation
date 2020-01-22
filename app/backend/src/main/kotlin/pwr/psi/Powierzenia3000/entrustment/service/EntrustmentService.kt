package pwr.psi.Powierzenia3000.entrustment.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.entrustment.repository.EntrustmentRepository
import pwr.psi.Powierzenia3000.shared.model.Entrustment
import pwr.psi.Powierzenia3000.shared.model.EntrustmentStatus

@Service
class EntrustmentService (private val entrustmentRepository: EntrustmentRepository) {

    fun findEntrustmentById(id:Long) = entrustmentRepository.findEntrustmentById(id)

    fun findEntrustmentByStatus(status: EntrustmentStatus) = entrustmentRepository.findEntrustmentByEntrustmentStatus(status)

    fun postEntrustment(entrustment: Entrustment) = entrustmentRepository.save(entrustment)
}