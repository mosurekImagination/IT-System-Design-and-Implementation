package pwr.psi.Powierzenia3000.entrustment.model

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
        val teacherId: Long = 0,
        //TODO
        val courseId: Long = 0
)


enum class EntrustmentStatus {
    NEW, REJECTED, ACCEPTED, PROPOSED
}