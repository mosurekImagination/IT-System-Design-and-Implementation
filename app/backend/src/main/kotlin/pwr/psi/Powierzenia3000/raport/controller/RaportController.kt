package pwr.psi.Powierzenia3000.raport.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import pwr.psi.Powierzenia3000.raport.service.RaportService
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/raport")
class RaportController(private val raportService: RaportService) {

    @GetMapping("/free")
    fun getFreeEntrustments() =
            raportService.getFreeEntrustments().toResponseEntity()

    @GetMapping("/list/{lecturerSurname}")
    fun getLecturerEntrustments(@PathVariable lecturerSurname: String) =
            raportService.getLecturerEntrustments(lecturerSurname).toResponseEntity()

}