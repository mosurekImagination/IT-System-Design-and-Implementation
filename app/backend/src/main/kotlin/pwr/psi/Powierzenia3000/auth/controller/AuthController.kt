package pwr.psi.Powierzenia3000.auth.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import pwr.psi.Powierzenia3000.auth.payload.SomeGetFields
import pwr.psi.Powierzenia3000.lecturer.repository.KnowledgeAreaRepository
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import javax.validation.Valid

@RestController
@RequestMapping("/auth")
//Injection for test purposes
class AuthController(private val knowledgeAreaRepository: KnowledgeAreaRepository,
                     private val lecturerRepository: LecturerRepository) {

    @GetMapping("/me")
    fun me(): ResponseEntity<Any> =
            ResponseEntity.ok(SomeGetFields("Successful response"))

    @GetMapping("/test")
    fun test(): ResponseEntity<Any> {
        val copy = knowledgeAreaRepository.findAll().first().copy(lecturers = lecturerRepository.findAll().toSet())
        knowledgeAreaRepository.save(copy)
        return ResponseEntity.ok(SomeGetFields("Successful response"))
    }

    @GetMapping("/me2")
    fun me(@Valid query: SomeGetFields): ResponseEntity<Any> = ResponseEntity.ok(query.field)
}


