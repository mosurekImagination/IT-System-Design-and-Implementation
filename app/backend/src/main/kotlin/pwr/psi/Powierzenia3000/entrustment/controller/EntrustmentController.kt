package pwr.psi.Powierzenia3000.entrustment.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.entrustment.service.EntrustmentService
import pwr.psi.Powierzenia3000.shared.model.Entrustment
import pwr.psi.Powierzenia3000.shared.model.toEntrustmentStatus
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/entrustment")
class EntrustmentController(private val entrustmentService: EntrustmentService) {

    @GetMapping("/id/{id}")
    fun getEntrustmentById(@PathVariable id: String): ResponseEntity<Entrustment> =
            entrustmentService.findEntrustmentById(id.toLong()).toResponseEntity()

    @GetMapping("/status/{status}")
    fun getEntrustmentByStatus(@PathVariable status: String): ResponseEntity<List<Entrustment>> =
            entrustmentService.findEntrustmentByStatus(status.toEntrustmentStatus()).toResponseEntity()

    @PutMapping("/update")
    fun updateEntrustment(@RequestBody entrustment: Entrustment): ResponseEntity<Entrustment> {
        val tempEntrustment = entrustmentService.findEntrustmentById(entrustment.id)
        return tempEntrustment?.copy(answer = entrustment.answer, entrustmentStatus = entrustment.entrustmentStatus,
                lecturer = entrustment.lecturer, courseId = entrustment.courseId)
                ?.let { entrustmentService.saveEntrustment(it) }.toResponseEntity()
    }

    @PostMapping("/add")
    fun postEntrustment(@RequestBody entrustment: Entrustment): ResponseEntity<Entrustment> =
            entrustmentService.saveEntrustment(entrustment).toResponseEntity()
}