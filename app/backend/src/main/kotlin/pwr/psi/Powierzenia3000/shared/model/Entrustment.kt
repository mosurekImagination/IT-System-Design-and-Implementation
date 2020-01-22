package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
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

fun String.toEntrustmentStatus() =
    when(this){
        "NEW" -> EntrustmentStatus.NEW
        "REJECTED" -> EntrustmentStatus.REJECTED
        "ACCEPTED" -> EntrustmentStatus.ACCEPTED
        "PROPOSED" -> EntrustmentStatus.PROPOSED
        else -> EntrustmentStatus.NEW
    }
