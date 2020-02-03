package pwr.psi.Powierzenia3000.service

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.context.annotation.Import
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService
import pwr.psi.Powierzenia3000.shared.model.Lecturer

@ExtendWith(MockitoExtension::class)
class LecturerServiceTest {

    @Mock
    lateinit var lecturerRepository: LecturerRepository

    @InjectMocks
    lateinit var lecturerService: LecturerService

    private var mockLecturer:Lecturer? = null

    @BeforeEach
    fun setup(){
        mockLecturer = Lecturer(id = LECTURER_ID, name = LECTURER_NAME, surname = LECTURER_SURNAME)
    }

    @Test
    fun shouldGetLecturerById(){
        `when`(lecturerRepository.findLecturerById(LECTURER_ID)).thenReturn(mockLecturer)

        assertEquals(mockLecturer,lecturerService.getLecturerById(LECTURER_ID))
    }

    @Test
    fun shouldGetLecturerBySurname(){
        `when`(lecturerRepository.findLecturerBySurname(LECTURER_SURNAME)).thenReturn(mockLecturer)

        assertEquals(mockLecturer,lecturerService.getLecturerBySurname(LECTURER_SURNAME))
    }


    companion object {
        const val LECTURER_ID = 1L
        const val LECTURER_NAME = "Michał"
        const val LECTURER_SURNAME = "Michałowski"
    }

}