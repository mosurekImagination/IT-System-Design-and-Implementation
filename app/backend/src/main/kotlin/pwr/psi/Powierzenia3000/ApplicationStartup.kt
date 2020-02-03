package pwr.psi.Powierzenia3000

import org.slf4j.LoggerFactory
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import pwr.psi.Powierzenia3000.auth.repository.UserRepository
import pwr.psi.Powierzenia3000.course.repository.CourseRepository
import pwr.psi.Powierzenia3000.course.repository.CourseTranslationRepository
import pwr.psi.Powierzenia3000.entrustment.repository.EntrustmentRepository
import pwr.psi.Powierzenia3000.lecturer.repository.KnowledgeAreaRepository
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.shared.model.*
import kotlin.random.Random

@Component
class ApplicationStartup(
        val knowledgeAreaRepository: KnowledgeAreaRepository,
        val lecturerRepository: LecturerRepository,
        val userRepository: UserRepository,
        val courseRepository: CourseRepository,
        val entrustmentRepository: EntrustmentRepository,
        val courseTranslationRepository: CourseTranslationRepository
) : ApplicationListener<ApplicationReadyEvent> {


    companion object {
        val logger = LoggerFactory.getLogger(ApplicationStartup::class.java)
    }

    override fun onApplicationEvent(event: ApplicationReadyEvent) {
        if (knowledgeAreaRepository.findAll().isEmpty()) {
            logger.info("#### New database - initialising default values")
            val knowledgeAreas = arrayListOf(
                    KnowledgeArea(name = "bazy danych"),
                    KnowledgeArea(name = "algorytmy"),
                    KnowledgeArea(name = "UML"),
                    KnowledgeArea(name = "big data"),
                    KnowledgeArea(name = "programowanie obiektowe"),
                    KnowledgeArea(name = "programowanie funkcyjne")
            )
            knowledgeAreaRepository.saveAll(knowledgeAreas);
            logger.info("saving knowledge areas")
            knowledgeAreas.forEach { println(it) }

            val savedAreas = knowledgeAreaRepository.findAll();
            savedAreas.forEach { it.lecturers }
            val lecturers = arrayListOf(
                    Lecturer(name = "Michał",
                            surname = "Doleżal",
                            knowledgeArea = setOf(savedAreas[1])
                    ),
                    Lecturer(name = "Jacek",
                            surname = "Placek",
                            title = Title.PROFESOR,
                            pesel = 48042029213,
                            knowledgeArea = setOf(savedAreas[2], savedAreas[3])),
                    Lecturer(name = "Krzysztof",
                            surname = "Ibisz",
                            title = Title.DOKTOR,
                            pesel = 68013029431,
                            knowledgeArea = savedAreas.toSet())
            )
            lecturerRepository.saveAll(lecturers)
            savedAreas[0].copy(lecturers = setOf(lecturers[0], lecturers[1])).let { knowledgeAreaRepository.save(it) }
            savedAreas[1].copy(lecturers = setOf(lecturers[2])).let { knowledgeAreaRepository.save(it) }
            savedAreas[2].copy(lecturers = setOf(lecturers[2], lecturers[1])).let { knowledgeAreaRepository.save(it) }
            savedAreas[3].copy(lecturers = setOf(lecturers[0])).let { knowledgeAreaRepository.save(it) }
            savedAreas[4].copy(lecturers = setOf(lecturers[1])).let { knowledgeAreaRepository.save(it) }
            savedAreas[5].copy(lecturers = setOf(lecturers[2])).let { knowledgeAreaRepository.save(it) }

            logger.info("saving lecturers")

            val courses = arrayListOf(
                    Course(
                            code = "ABC-123",
                            courseType = CourseType.PROJEKT
                    ),
                    Course(
                            code = "DEF-456",
                            courseType = CourseType.CWICZENIA
                    ),
                    Course(
                            code = "GHI-789",
                            courseType = CourseType.PRAKTYKI
                    ),
                    Course(
                            code = "CBA-321",
                            courseType = CourseType.LABORATORIA
                    ),
                    Course(
                            code = "FED-654",
                            courseType = CourseType.WYKLAD
                    ),
                    Course(
                            code = "IHG-987",
                            courseType = CourseType.LABORATORIA
                    )
            )
            courses.forEach {
                courseRepository.save(it)
            }
            logger.info("saving courses")


            val coursesList = courseRepository.findAll()
            val lecturersList = lecturerRepository.findAll()
            val entrustments = arrayListOf(
                    Entrustment(
                            answer = "Niestety nie mogę przyjąć powierzenia",
                            entrustmentStatus = EntrustmentStatus.REJECTED,
                            hours = 24.0,
                            courseId = coursesList[1]
                    ),
                    Entrustment(
                            entrustmentStatus = EntrustmentStatus.NEW,
                            hours = 10.0,
                            courseId = coursesList[0]
                    ),
                    Entrustment(
                            entrustmentStatus = EntrustmentStatus.PROPOSED,
                            hours = 43.0,
                            lecturer = lecturersList[2],
                            courseId = coursesList[2]
                    ),
                    Entrustment(
                            entrustmentStatus = EntrustmentStatus.ACCEPTED,
                            hours = 50.0,
                            lecturer = lecturersList[1],
                            courseId = coursesList[3]
                    ),
                    Entrustment(
                            entrustmentStatus = EntrustmentStatus.NEW,
                            hours = 21.0,
                            courseId = coursesList[4]
                    ),
                    Entrustment(
                            entrustmentStatus = EntrustmentStatus.ACCEPTED,
                            hours = 45.0,
                            lecturer = lecturersList[0],
                            courseId = coursesList[5]
                    )
            )

            entrustmentRepository.saveAll(entrustments)
            logger.info("saving entrustments")

            val courseTranslations = arrayListOf(
                    CourseTranslation(
                            course = coursesList[0],
                            languageCode = LanguageCode.PL,
                            name = "Bazy danych"
                    ),
                    CourseTranslation(
                            course = coursesList[0],
                            languageCode = LanguageCode.EN,
                            name = "Databases"
                    ),
                    CourseTranslation(
                            course = coursesList[1],
                            languageCode = LanguageCode.PL,
                            name = "Programowanie obiekowe"
                    ),
                    CourseTranslation(
                            course = coursesList[1],
                            languageCode = LanguageCode.EN,
                            name = "Object Programming"
                    ),
                    CourseTranslation(
                            course = coursesList[2],
                            languageCode = LanguageCode.PL,
                            name = "Duże zbiory danych"
                    ),
                    CourseTranslation(
                            course = coursesList[2],
                            languageCode = LanguageCode.EN,
                            name = "Big data"
                    ),
                    CourseTranslation(
                            course = coursesList[3],
                            languageCode = LanguageCode.PL,
                            name = "Projektowanie systemów informatycznych"
                    ),
                    CourseTranslation(
                            course = coursesList[3],
                            languageCode = LanguageCode.EN,
                            name = "Software Engineering"
                    ),
                    CourseTranslation(
                            course = coursesList[4],
                            languageCode = LanguageCode.PL,
                            name = "Programowanie funkcyjne"
                    ),
                    CourseTranslation(
                            course = coursesList[4],
                            languageCode = LanguageCode.EN,
                            name = "Functional programming"
                    ),
                    CourseTranslation(
                            course = coursesList[5],
                            languageCode = LanguageCode.PL,
                            name = "UML"
                    ),
                    CourseTranslation(
                            course = coursesList[5],
                            languageCode = LanguageCode.EN,
                            name = "UML"
                    )
            )

            courseTranslationRepository.saveAll(courseTranslations)
            logger.info("saving course translations")

            val courseTranslationsList = courseTranslationRepository.findAll()
            coursesList[0].copy(translation = listOf(courseTranslationsList[0], courseTranslationsList[1])).let { courseRepository.save(it) }
            coursesList[1].copy(translation = listOf(courseTranslationsList[2], courseTranslationsList[3])).let { courseRepository.save(it) }
            coursesList[2].copy(translation = listOf(courseTranslationsList[4], courseTranslationsList[5])).let { courseRepository.save(it) }
            coursesList[3].copy(translation = listOf(courseTranslationsList[6], courseTranslationsList[7])).let { courseRepository.save(it) }
            coursesList[4].copy(translation = listOf(courseTranslationsList[8], courseTranslationsList[9])).let { courseRepository.save(it) }
            coursesList[5].copy(translation = listOf(courseTranslationsList[10], courseTranslationsList[11])).let { courseRepository.save(it) }


            val users = listOf(
                    User(token = "Zwf1iC2szdZtJvyJFjQBhYsWj4X2", role = Role.LECTURER),
                    User(token = "CSJXFvWLzmWo4XEC4ZwvbX3Qw1Y2", role = Role.LECTURER),
                    User(token = "IOc8oepAlUQjYrXDTN6OK9X8CnM2", role = Role.LECTURER),
                    User(token = "PsDbBvenczVu2FqCveVgSTBzA803", role = Role.LECTURER),
                    User(token = "IfQWwpmMdSWSD7xBIxWrDzY89gY2", role = Role.LECTURER),
                    User(token = "Ei8khydb1aMLhnn8lSRNIoIvEHI2", role = Role.LECTURER),
                    User(token = "qgOvdxp0hXWBQ28t58Uwhwr36Zg2", role = Role.WORKER)
                    )
            userRepository.saveAll(users)
            logger.info("saving users")

        }


        logger.info("##### APPLICATION LOADED ##### ")
    }
}