package pwr.psi.Powierzenia3000

import org.slf4j.LoggerFactory
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import pwr.psi.Powierzenia3000.auth.repository.UserRepository
import pwr.psi.Powierzenia3000.lecturer.repository.KnowledgeAreaRepository
import pwr.psi.Powierzenia3000.lecturer.repository.LecturerRepository
import pwr.psi.Powierzenia3000.shared.model.KnowledgeArea
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.shared.model.Role
import pwr.psi.Powierzenia3000.shared.model.User

@Component
class ApplicationStartup(
        val knowledgeAreaRepository: KnowledgeAreaRepository,
        val lecturerRepository: LecturerRepository,
        val userRepository: UserRepository
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
                    KnowledgeArea(name = "UML")
            )
            knowledgeAreaRepository.saveAll(knowledgeAreas);
            logger.info("saving knowledge areas")
            knowledgeAreas.forEach { println(it) }

            val savedAreas = knowledgeAreaRepository.findAll();
            savedAreas.forEach { it.lecturers }
            val lecturers = arrayListOf(
                    Lecturer(name = "Hanna",
                            surname = "Mazur",
                            knowledgeArea = savedAreas.toSet())
            )

            lecturerRepository.saveAll(lecturers)
            logger.info("saving lecturers")
            lecturers.forEach { println(it) }

            val user = User(token = "Zwf1iC2szdZtJvyJFjQBhYsWj4X2", role = Role.LECTURER)
            userRepository.save(user)
        }


        logger.info("##### APPLICATION LOADED ##### ")
    }
}