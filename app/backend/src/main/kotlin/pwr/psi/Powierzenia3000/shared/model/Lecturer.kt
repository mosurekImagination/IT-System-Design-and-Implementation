package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
@Table(name = "lecturer")
data class Lecturer(
        @Id @GeneratedValue
        val id: Long = 0,
        val token: String = "",
        val name: String = "",
        val surname: String = "",
        val title: Title = Title.INŻYNIER,
        val pesel: Long = 0,
        @ManyToMany(cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
        @JoinTable(
                name = "teacher_knowledge",
                joinColumns = [JoinColumn(name = "lecturer_id")],
                inverseJoinColumns = [JoinColumn(name = "knowledge_area_id")]
        )
        val knowledgeArea: Set<KnowledgeArea> = setOf()
)

enum class Title {
    INŻYNIER, MAGISTER, LICENCJAT, DOKTOR, DOKTOR_HABILITOWANY, PROFESOR, ARCHITEKT
}