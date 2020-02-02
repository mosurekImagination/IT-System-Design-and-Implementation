package pwr.psi.Powierzenia3000.course.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.course.repository.CourseTranslationRepository
import pwr.psi.Powierzenia3000.shared.model.Course
import pwr.psi.Powierzenia3000.shared.model.LanguageCode

@Service
class CourseTranslationService(private val courseTranslationRepository: CourseTranslationRepository) {
    fun getCourse(course: Course) = courseTranslationRepository.findCourseTranslationsByCourse(course)

    fun getCourse(languageCode: LanguageCode) = courseTranslationRepository.findCourseTranslationsByLanguageCode(languageCode)
}