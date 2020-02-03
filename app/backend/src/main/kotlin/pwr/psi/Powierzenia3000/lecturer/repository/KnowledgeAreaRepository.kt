package pwr.psi.Powierzenia3000.lecturer.repository

import org.springframework.data.jpa.repository.JpaRepository
import pwr.psi.Powierzenia3000.shared.model.KnowledgeArea
import pwr.psi.Powierzenia3000.shared.model.Lecturer

interface KnowledgeAreaRepository : JpaRepository<KnowledgeArea, Long> {
    fun findKnowledgeAreaByName(name: String): KnowledgeArea?

    fun findKnowledgeAreasByLecturers(lecturer: Lecturer): List<KnowledgeArea>?
}
