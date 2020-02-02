package pwr.psi.Powierzenia3000.lecturer.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.lecturer.service.KnowledgeAreaService
import pwr.psi.Powierzenia3000.lecturer.service.LecturerService
import pwr.psi.Powierzenia3000.shared.model.KnowledgeArea
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/knowledge")
class KnowledgeAreaController (private val knowledgeAreaService: KnowledgeAreaService, private val lecturerService: LecturerService){

    @GetMapping("/name/{name}")
    fun getKnowledgeByName(@PathVariable name: String): ResponseEntity<KnowledgeArea> =
            knowledgeAreaService.getKnowledgeAreaByName(name).toResponseEntity()

    @GetMapping("/lecturer/{id}")
    fun getKnowledgeByLecturer(@PathVariable id: String): ResponseEntity<List<KnowledgeArea>>? {
        val lecturer = lecturerService.getLecturerById(id.toLong())
        return lecturer?.let { knowledgeAreaService.getKnowledgeAreaByLecturer(it).toResponseEntity() }
    }

    @PostMapping("/add")
    fun postKnowdledge(@RequestBody knowledgeArea: KnowledgeArea): ResponseEntity<KnowledgeArea> =
            knowledgeAreaService.saveKnowledgeArea(knowledgeArea).toResponseEntity()
}