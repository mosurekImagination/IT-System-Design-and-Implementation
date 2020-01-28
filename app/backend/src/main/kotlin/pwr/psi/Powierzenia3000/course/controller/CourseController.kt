package pwr.psi.Powierzenia3000.course.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.course.service.CourseService
import pwr.psi.Powierzenia3000.shared.model.Course
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/course")
class CourseController(private val courseService: CourseService) {

    @GetMapping("/{courseCode}")
    fun getCourse(@PathVariable courseCode: String): ResponseEntity<Course> =
            courseService.getCourse(courseCode).toResponseEntity()

    @PostMapping("/add")
    fun postCourse(@RequestBody course: Course): ResponseEntity<Course> =
            courseService.postCourse(course).toResponseEntity()

}