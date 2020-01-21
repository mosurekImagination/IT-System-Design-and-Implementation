package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
@Table(name = "entrustment")
data class Entrustment(
        @Id @GeneratedValue
        val id: Long = 0,
        val answer: String? = "",
        val entrustmentStatus: EntrustmentStatus = EntrustmentStatus.NEW,
        val hours: Double? = 0.0,
        @ManyToOne
        val lecturer: Lecturer? = null,
        @ManyToOne
        val courseId: Course? = null
)


enum class EntrustmentStatus {
    NEW, REJECTED, ACCEPTED, PROPOSED
}