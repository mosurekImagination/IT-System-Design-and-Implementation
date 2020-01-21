package pwr.psi.Powierzenia3000.shared.model

import pwr.psi.Powierzenia3000.shared.model.Lecturer
import javax.persistence.*

@Entity
@Table(name = "knowledge_area")
data class KnowledgeArea(
        @Id @GeneratedValue
        val id: Long = 0,
        val name: String = "",
        @ManyToMany(mappedBy = "knowledgeArea")
        val lecturers: Set<Lecturer>
)