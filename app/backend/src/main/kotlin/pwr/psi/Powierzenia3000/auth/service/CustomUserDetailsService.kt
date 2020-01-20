package pwr.psi.Powierzenia3000.auth.service

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service
import pwr.psi.Powierzenia3000.security.CustomUserDetails
import pwr.psi.Powierzenia3000.auth.dataprovider.UserRepository

@Service
class CustomUserDetailsService (private val userRepository: UserRepository) : UserDetailsService {

    override fun loadUserByUsername(username: String): UserDetails =
            CustomUserDetails(userRepository.findOneByUserName(username)!!)

}