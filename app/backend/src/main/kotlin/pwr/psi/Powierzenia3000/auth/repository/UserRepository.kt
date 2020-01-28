package pwr.psi.Powierzenia3000.auth.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import pwr.psi.Powierzenia3000.shared.model.User

@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun findUserByToken(token: String): User?
}