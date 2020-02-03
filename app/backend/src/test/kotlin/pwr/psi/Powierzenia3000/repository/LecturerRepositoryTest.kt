package pwr.psi.Powierzenia3000.repository

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.service.LecturerServiceTest
import pwr.psi.Powierzenia3000.shared.model.Lecturer

@DataJpaTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(MockitoExtension::class)
class LecturerRepositoryTest {

    @Autowired
    lateinit var lecturerRepository: LecturerRepository

    var mockLecturer:Lecturer? = null

    @BeforeAll
    fun setup(){
        mockLecturer = Lecturer(id = LecturerServiceTest.LECTURER_ID, name = LecturerServiceTest.LECTURER_NAME, surname = LecturerServiceTest.LECTURER_SURNAME)
        lecturerRepository.save(mockLecturer!!)
    }

    @Test
    fun shouldFetchLecturerById(){
        val lecturer = lecturerRepository.findLecturerById(LECTURER_ID)

        assertEquals(mockLecturer, lecturer)
    }

    @Test
    fun shouldFetchLecturerBySurname(){
        val lecturer = lecturerRepository.findLecturerBySurname(LECTURER_SURNAME)

        assertEquals(mockLecturer, lecturer)
    }



    companion object {
        const val LECTURER_ID = 1L
        const val LECTURER_NAME = "Michał"
        const val LECTURER_SURNAME = "Michałowski"

    }
}