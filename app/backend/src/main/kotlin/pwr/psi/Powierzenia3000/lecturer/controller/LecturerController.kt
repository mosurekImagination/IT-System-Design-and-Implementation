package pwr.psi.Powierzenia3000.lecturer.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/lecturer")
class LecturerController(private val lecturerService: LecturerService) {

    @GetMapping("/token/{token}")
    fun getLecturerByToken(@PathVariable token: String): ResponseEntity<Lecturer> =
            lecturerService.getLecturerByToken(token).toResponseEntity()

    @GetMapping("/surname/{surname}")
    fun getLecturerBySurname(@PathVariable surname: String): ResponseEntity<Lecturer> =
            lecturerService.getLecturerBySurname(surname).toResponseEntity()

    @GetMapping("/id/{id}")
    fun getLecturerById(@PathVariable id: String): ResponseEntity<Lecturer> =
            lecturerService.getLecturerById(id.toLong()).toResponseEntity()

    @PostMapping("/add")
    fun postLecturer(@RequestBody lecturer: Lecturer): ResponseEntity<Lecturer> =
            lecturerService.postLecturer(lecturer).toResponseEntity()

}