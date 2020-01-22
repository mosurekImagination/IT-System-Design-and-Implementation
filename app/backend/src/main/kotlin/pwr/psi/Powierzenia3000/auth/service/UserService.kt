package pwr.psi.Powierzenia3000.auth.service

import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.auth.repository.UserRepository
import pwr.psi.Powierzenia3000.shared.model.User

@Service
class UserService(private val userRepository: UserRepository)  {

    fun loadUserByUsername(token: String): User? =
            userRepository.findOneByToken(token)
}