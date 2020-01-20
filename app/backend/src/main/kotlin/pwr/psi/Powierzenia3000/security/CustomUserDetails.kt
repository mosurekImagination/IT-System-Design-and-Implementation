package pwr.psi.Powierzenia3000.security

import org.slf4j.LoggerFactory
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import pwr.psi.Powierzenia3000.shared.model.User
import java.util.stream.Collectors

open class CustomUserDetails(user: User) : User(user), UserDetails {

    private val log = LoggerFactory.getLogger(CustomUserDetails::class.java)

    override fun getAuthorities(): Collection<GrantedAuthority> =
            roles
                    .stream()
                    .map { role ->
                        log.debug("Granting Authority to user with role: " + role.toString())
                        SimpleGrantedAuthority(role.toString())
                    }
                    .collect(Collectors.toList())

    override fun getPassword(): String = super.passWord

    override fun getUsername(): String = super.userName

    override fun isEnabled(): Boolean = super.enabled

    override fun isCredentialsNonExpired(): Boolean = super.credentialsNonExpired

    override fun isAccountNonExpired(): Boolean = super.accountNonExpired

    override fun isAccountNonLocked(): Boolean = super.accountNonLocked
}