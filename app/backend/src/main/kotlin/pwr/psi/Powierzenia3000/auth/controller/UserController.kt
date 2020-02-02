package pwr.psi.Powierzenia3000.auth.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import pwr.psi.Powierzenia3000.auth.service.UserService
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/auth")
class UserController(private val userService: UserService) {

    @GetMapping("/{token}")
    fun getUserByToken(@PathVariable token: String): ResponseEntity<Any> =
            userService.getUserByToken(token).toResponseEntity()
}


