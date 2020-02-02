package pwr.psi.Powierzenia3000.lecturer.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.lecturer.service.KnowledgeAreaService
import pwr.psi.Powierzenia3000.shared.model.KnowledgeArea
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/knowledge")
class KnowledgeAreaController (private val knowledgeAreaService: KnowledgeAreaService){

    @GetMapping("/name/{name}")
    fun getKnowledgeByName(@PathVariable name: String): ResponseEntity<KnowledgeArea> =
            knowledgeAreaService.getKnowledgeAreaByName(name).toResponseEntity()

    @GetMapping("/lecturer/{lecturer}")
    fun getKnowledgeByLecturer(@PathVariable lecturer: Lecturer): ResponseEntity<List<KnowledgeArea>> =
            knowledgeAreaService.getKnowledgeAreaByLecturer(lecturer).toResponseEntity()

    @PostMapping("/add")
    fun postKnowdledge(@RequestBody knowledgeArea: KnowledgeArea): ResponseEntity<KnowledgeArea> =
            knowledgeAreaService.saveKnowledgeArea(knowledgeArea).toResponseEntity()
}