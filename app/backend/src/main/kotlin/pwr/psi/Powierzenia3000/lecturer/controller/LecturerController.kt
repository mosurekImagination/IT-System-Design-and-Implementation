package pwr.psi.Powierzenia3000.lecturer.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService

@RestController
@RequestMapping("/lecturer")
class LecturerController(private val lecturerService: LecturerService) {

    @GetMapping("/token/{token}")
    fun getLecturerByToken(@PathVariable token: String): ResponseEntity<Any> = ResponseEntity.ok(lecturerService.getLecturerByToken(token))

    @GetMapping("/surname/{surname}")
    fun getLecturerBySurname(@PathVariable surname: String): ResponseEntity<Any> = ResponseEntity.ok(lecturerService.getLecturerBySurname(surname))

    @GetMapping("/id/{id}")
    fun getLecturerById(@PathVariable id: String): ResponseEntity<Any> = ResponseEntity.ok(lecturerService.getLecturerById(id.toLong()))

    @PostMapping("/add")
    fun postLecturer(@RequestBody lecturer: Lecturer) {
        lecturerService.postLecturer(lecturer)
    }
}