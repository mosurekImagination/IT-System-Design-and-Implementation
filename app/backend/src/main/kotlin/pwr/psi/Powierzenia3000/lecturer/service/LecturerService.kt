package pwr.psi.Powierzenia3000.lecturer.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository

@Service
class LecturerService(private val lecturerRepository: LecturerRepository) {

    fun getLecturerById(id: Long): Lecturer? = lecturerRepository.findLecturerById(id)

    fun getLecturerBySurname(surname: String): Lecturer? = lecturerRepository.findLecturerBySurname(surname)

    fun saveLecturer(lecturer: Lecturer) = lecturerRepository.save(lecturer)

}
