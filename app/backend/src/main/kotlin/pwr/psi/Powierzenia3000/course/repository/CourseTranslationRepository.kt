package pwr.psi.Powierzenia3000.course.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.shared.model.Course
import pwr.psi.Powierzenia3000.shared.model.CourseTranslation
import pwr.psi.Powierzenia3000.shared.model.LanguageCode

interface CourseTranslationRepository : JpaRepository<CourseTranslation, Long> {
    fun findCourseTranslationsByCourse(course: Course): List<CourseTranslation>?

    fun findCourseTranslationsByLanguageCode(languageCode: LanguageCode): List<CourseTranslation>?
}