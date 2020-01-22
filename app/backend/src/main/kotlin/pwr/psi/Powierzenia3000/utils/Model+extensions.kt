package pwr.psi.Powierzenia3000.utils

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

fun <T> T?.toResponseEntity() =
        if (this != null) {
            ResponseEntity(this, HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }