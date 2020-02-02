package pwr.psi.Powierzenia3000.raport.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.entrustment.repository.EntrustmentRepository
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.shared.model.Entrustment

@Service
class RaportService(private val entrustmentRepository: EntrustmentRepository, private val lecturerRepository: LecturerRepository) {

    fun getFreeEntrustments() = entrustmentRepository.findEntrustmentsByLecturerIsNull()

    fun getLecturerEntrustments(lecturerId: String): List<Entrustment>? {
        val lecturer = lecturerRepository.findLecturerById(lecturerId.toLong()) ?: return null
        return entrustmentRepository.findEntrustmentByLecturer(lecturer)
    }
}