package pwr.psi.Powierzenia3000.shared.model

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

@Entity
@Table(name = "Translation")
data class CourseTranslation(
        @Id @GeneratedValue
        val id: Long = 0,
        @ManyToOne
        @JsonIgnore
        val course: Course? = null,
        val languageCode: LanguageCode = LanguageCode.PL,
        val name: String = ""
)


enum class LanguageCode {
    PL, EN
}

fun String.toLanguageCode() =
    when(this){
        "EN" -> LanguageCode.EN
        else -> LanguageCode.PL
    }