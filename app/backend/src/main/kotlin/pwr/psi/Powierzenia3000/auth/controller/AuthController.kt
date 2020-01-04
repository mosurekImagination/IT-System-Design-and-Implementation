package pwr.psi.Powierzenia3000.auth.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import pwr.psi.Powierzenia3000.auth.payload.SomeGetFields
import javax.validation.Valid

@RestController
@RequestMapping("/auth")
class AuthController {

    @GetMapping("/me")
    fun me():ResponseEntity<Any> = ResponseEntity.ok(SomeGetFields("Successful response"))

    @GetMapping("/me2")
    fun me(@Valid query: SomeGetFields):ResponseEntity<Any> = ResponseEntity.ok(query.field)
}