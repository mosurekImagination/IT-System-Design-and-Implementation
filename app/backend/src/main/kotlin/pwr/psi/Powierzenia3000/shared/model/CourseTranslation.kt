package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity
data class CourseTranslation(
        @Id @GeneratedValue
        val id: Long = 0,
        @ManyToOne
        val course: Course? = null,
        val languageCode: LanguageCode,
        val name: String = ""
)


enum class LanguageCode {
    PL, EN
}