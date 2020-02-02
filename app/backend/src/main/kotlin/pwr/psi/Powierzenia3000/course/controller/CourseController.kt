package pwr.psi.Powierzenia3000.course.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pwr.psi.Powierzenia3000.course.service.CourseService
import pwr.psi.Powierzenia3000.course.service.CourseTranslationService
import pwr.psi.Powierzenia3000.shared.model.Course
import pwr.psi.Powierzenia3000.shared.model.CourseTranslation
import pwr.psi.Powierzenia3000.shared.model.LanguageCode
import pwr.psi.Powierzenia3000.shared.model.toLanguageCode
import pwr.psi.Powierzenia3000.utils.toResponseEntity

@RestController
@RequestMapping("/course")
class CourseController(private val courseService: CourseService, private val courseTranslationService: CourseTranslationService) {

    @GetMapping("/{courseCode}")
    fun getCourse(@PathVariable courseCode: String): ResponseEntity<Course> =
            courseService.getCourse(courseCode).toResponseEntity()

    @GetMapping("/translation/lang/{languageCode}")
    fun getCourseTranslationByLangCode(@PathVariable languageCode: String): ResponseEntity<List<CourseTranslation>> =
            courseTranslationService.getCourse(languageCode.toLanguageCode()).toResponseEntity()

    @GetMapping("/translation")
    fun getCourseTranslation(@RequestBody code: String): ResponseEntity<List<CourseTranslation>>? {
        val course = courseService.getCourse(code)
        return course?.let { courseTranslationService.getCourse(it).toResponseEntity() }
    }

    @PostMapping("/add")
    fun postCourse(@RequestBody course: Course): ResponseEntity<Course> =
            courseService.saveCourse(course).toResponseEntity()

}