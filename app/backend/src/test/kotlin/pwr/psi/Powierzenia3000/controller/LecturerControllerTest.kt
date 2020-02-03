package pwr.psi.Powierzenia3000.controller

import io.restassured.module.mockmvc.RestAssuredMockMvc
import io.restassured.module.mockmvc.RestAssuredMockMvc.given
import org.hamcrest.Matchers.equalTo
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.mockito.Mockito
import org.mockito.Mockito.verify
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.MockMvc
import pwr.psi.Powierzenia3000.lecturer.controller.KnowledgeAreaController
import pwr.psi.Powierzenia3000.lecturer.controller.LecturerController
import pwr.psi.Powierzenia3000.lecturer.repository.KnowledgeAreaRepository
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.lecturer.service.KnowledgeAreaService
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService
import pwr.psi.Powierzenia3000.shared.model.Lecturer

@WebMvcTest(LecturerController::class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class LecturerControllerTest {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @MockBean
    private lateinit var lecturerService: LecturerService

    @MockBean
    private lateinit var knowledgeAreaRepository: KnowledgeAreaRepository

    @BeforeAll
    fun setup(){
        RestAssuredMockMvc.mockMvc(mockMvc)
    }

    @Test
    fun should_get_lecturer_by_id(){
        val lecturer = Lecturer(id = 1, name = "Michał", surname = "Dolezal")
        Mockito.`when`(lecturerService.getLecturerById(1)).thenReturn(lecturer)


        given()
                .contentType("application/json")
                .get("/lecturer/id/{id}", "1")
                .then()
                .statusCode(200)
                .body("surname", equalTo(lecturer.surname))
    }

    @Test
    fun should_get_lecturer_by_surname(){
        val lecturer = Lecturer(id = 1, name = "Michał", surname = "Dolezal")
        Mockito.`when`(lecturerService.getLecturerBySurname(lecturer.surname)).thenReturn(lecturer)


        given()
                .contentType("application/json")
                .get("/lecturer/surname/{surname}", "Dolezal")
                .then()
                .statusCode(200)
                .body("surname", equalTo(lecturer.surname))
    }

    @Test
    fun should_get_all_lecturers(){
        val lecturer = Lecturer(id = 1, name = "Michał", surname = "Dolezal")
        Mockito.`when`(lecturerService.getAll()).thenReturn(listOf(lecturer))


        given()
                .contentType("application/json")
                .get("/lecturer/all")
                .then()
                .statusCode(200)
                .body("surname", equalTo(listOf(lecturer.surname)))
    }
}