package pwr.psi.Powierzenia3000.shared.model

import javax.persistence.*

@Entity
open class User(var firstName: String = "",
                var lastName: String = "",
                var userName: String = "",
                var email: String = "",
                var passWord: String = "") {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0
    var version: Int = 0
    var accountNonExpired: Boolean = true
    var accountNonLocked: Boolean = true
    var credentialsNonExpired: Boolean = true
    var enabled: Boolean = true
    @ManyToMany(fetch = FetchType.EAGER, cascade = arrayOf(CascadeType.ALL))
    var roles: Set<Role> = HashSet()
    constructor(user: User) : this(user.firstName, user.lastName, user.userName, user.email, user.passWord) {
        id = user.id
        version = user.version
        firstName = user.firstName
        lastName = user.lastName
        userName = user.userName
        email = user.email
        passWord = user.passWord
        accountNonExpired = user.accountNonExpired
        accountNonLocked = user.accountNonLocked
        credentialsNonExpired = user.credentialsNonExpired
        enabled = user.enabled
        roles = user.roles
    }
}