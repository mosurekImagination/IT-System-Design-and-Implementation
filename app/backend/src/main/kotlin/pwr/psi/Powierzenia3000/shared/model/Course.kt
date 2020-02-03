package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
data class Course(
        @Id @GeneratedValue
        val id: Long = 0,
        val code: String = "",
        val courseType: CourseType = CourseType.WYKLAD,
        @OneToMany(mappedBy = "course")
        val translation: List<CourseTranslation> = listOf()
)


enum class CourseType{
    PROJEKT, LABORATORIA, CWICZENIA, WYKLAD, PRAKTYKI
}