package pwr.psi.Powierzenia3000.course.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.shared.model.Course

interface CourseRepository : JpaRepository<Course, Long> {
    fun findCourseByCode(code: String): Course?
}