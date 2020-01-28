package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
data class Course(
        @Id @GeneratedValue
        val id: Long = 0,
        val code: String = "",
        val courseType: CourseType = CourseType.WYKLAD
)


enum class CourseType{
    PROJEKT, LABORATORIA, CWICZENIA, WYKLAD, PRAKTYKI
}