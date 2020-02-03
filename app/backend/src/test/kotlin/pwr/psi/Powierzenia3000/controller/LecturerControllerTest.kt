package pwr.psi.Powierzenia3000.controller

import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.security.test.context.support.WithMockUser
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService
import pwr.psi.Powierzenia3000.shared.model.Lecturer

@SpringBootTest
class LecturerControllerTest {

    @MockBean
    private lateinit var lecturerService: LecturerService

    @Test
    @WithMockUser
    fun should_create_lecturer(){
        val lecturer = Lecturer(name = "Michał", surname = "Doleżal")
        Mockito.`when`(lecturerService.saveLecturer(lecturer))
    }
}