package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "course")
data class Course(
        @Id
        val code: String = "",
        val courseType: CourseType = CourseType.WYKLAD
)


enum class CourseType{
    PROJEKT, LABORATORIA, CWICZENIA, WYKLAD, PRAKTYKI
}