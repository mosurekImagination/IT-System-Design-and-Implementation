package pwr.psi.Powierzenia3000.lecturer.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.shared.model.Lecturer

interface LecturerRepository : JpaRepository<Lecturer, Long> {
    fun findLecturerById(id: Long): Lecturer?

    fun findLecturerByToken(token: String): Lecturer?

    fun findLecturerBySurname(surname: String): Lecturer?
}