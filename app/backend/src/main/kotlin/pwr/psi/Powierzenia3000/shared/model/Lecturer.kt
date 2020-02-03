package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
data class Lecturer(
        @Id @GeneratedValue
        val id: Long = 0,
        val name: String = "",
        val surname: String = "",
        val title: Title = Title.INŻYNIER,
        val pesel: Long = 0,

        @ManyToMany
        val knowledgeArea: Set<KnowledgeArea> = setOf()
)

enum class Title {
    INŻYNIER, MAGISTER, LICENCJAT, DOKTOR, DOKTOR_HABILITOWANY, PROFESOR, ARCHITEKT
}