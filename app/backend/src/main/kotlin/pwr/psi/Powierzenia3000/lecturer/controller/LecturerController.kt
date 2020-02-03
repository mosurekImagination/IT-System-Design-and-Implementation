package pwr.psi.Powierzenia3000.lecturer.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.lecturer.repository.KnowledgeAreaRepository
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/lecturer")
class LecturerController(private val lecturerService: LecturerService, private val knowledgeAreaRepository: KnowledgeAreaRepository) {

    @GetMapping("/surname/{surname}")
    fun getLecturerBySurname(@PathVariable surname: String): ResponseEntity<Lecturer> =
            lecturerService.getLecturerBySurname(surname).toResponseEntity()

    @GetMapping("/id/{id}")
    fun getLecturerById(@PathVariable id: String): ResponseEntity<Lecturer> =
            lecturerService.getLecturerById(id.toLong()).toResponseEntity()

    @PostMapping("/add")
    fun postLecturer(@RequestBody lecturer: Lecturer): ResponseEntity<Lecturer> =
            lecturerService.saveLecturer(lecturer).toResponseEntity()

    @GetMapping("/all")
    fun getAllLecturers(): ResponseEntity<List<Lecturer>> = lecturerService.getAll().toResponseEntity()

    @PutMapping("/update")
    fun updateLecturer(@RequestBody lecturer: Lecturer): ResponseEntity<Lecturer>{
        val tempLecturer = lecturerService.getLecturerById(lecturer.id)
        val areas = knowledgeAreaRepository.findAllById(lecturer.knowledgeArea.map { it.id });
        return tempLecturer?.copy(knowledgeArea = areas.toSet())?.let { lecturerService.saveLecturer(it) }.toResponseEntity()
    }

}