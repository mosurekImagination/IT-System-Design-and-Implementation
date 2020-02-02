package pwr.psi.Powierzenia3000.course.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.course.repository.CourseRepository
import pwr.psi.Powierzenia3000.shared.model.Course

@Service
class CourseService(private val courseRepository: CourseRepository) {

    fun getCourse(code: String) = courseRepository.findCourseByCode(code)

    fun saveCourse(course: Course) = courseRepository.save(course)
}