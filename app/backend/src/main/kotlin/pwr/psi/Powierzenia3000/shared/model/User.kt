package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
data class User(
        @Id @GeneratedValue
        val id: Long = 0,
        val token: String = "",
        val role: Role = Role.WORKER
)

enum class Role {
    ADMIN, LECTURER, WORKER
}