package pwr.psi.Powierzenia3000.entrustment.model

import pwr.psi.Powierzenia3000.profile.model.Lecturer
import javax.persistence.*

@Entity
@Table(name = "entrustment")
data class Entrustment(
        @Id @GeneratedValue
        val id: Long = 0,
        val answer: String? = "",
        val entrustmentStatus: EntrustmentStatus = EntrustmentStatus.NEW,
        val hours: Double? = 0.0,
        //TODO
        @ManyToOne
        @JoinColumn(name = "lecturer_id")
        val lecturer: Lecturer? = null,
        @ManyToOne
        @JoinColumn(name = "course_id")
        val courseId: Course? = null
)


enum class EntrustmentStatus {
    NEW, REJECTED, ACCEPTED, PROPOSED
}