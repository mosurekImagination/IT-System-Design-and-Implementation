package pwr.psi.Powierzenia3000.raport.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.entrustment.repository.EntrustmentRepository
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.shared.model.Entrustment

@Service
class RaportService(private val entrustmentRepository: EntrustmentRepository, private val lecturerRepository: LecturerRepository) {

    fun getFreeEntrustments() = entrustmentRepository.findEntrustmentByLecturerIsNull()

    fun getLecturerEntrustments(lecturerName: String): List<Entrustment>? {
        val lecturer = lecturerRepository.findLecturerBySurname(lecturerName) ?: return null
        return entrustmentRepository.findEntrustmentByLecturer(lecturer)
    }
}