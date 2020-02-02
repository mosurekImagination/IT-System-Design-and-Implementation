package pwr.psi.Powierzenia3000.lecturer.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.shared.model.KnowledgeArea
import pwr.psi.Powierzenia3000.shared.model.Lecturer
import pwr.psi.Powierzenia3000.lecturer.repository.KnowledgeAreaRepository

@Service
class KnowledgeAreaService(private val knowledgeAreaRepository: KnowledgeAreaRepository){

    fun saveKnowledgeArea(knowledgeArea: KnowledgeArea) = knowledgeAreaRepository.save(knowledgeArea)

    fun getKnowledgeAreaByName(name: String) = knowledgeAreaRepository.findKnowledgeAreaByName(name)

    fun getKnowledgeAreaByLecturer(lecturer: Lecturer) = knowledgeAreaRepository.findKnowledgeAreasByLecturers(lecturer)
}