package pwr.psi.Powierzenia3000.security

import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import java.util.*


@EnableWebSecurity
open class WebSecurityConfiguration()
    : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http.csrf().disable()
        http.cors()
        http.authorizeRequests()
//                .antMatchers("/api/*").authenticated()
                .anyRequest().permitAll()
                .and()
                .formLogin().permitAll()
    }

    @Bean
    fun corsConfigurationSource() =
            UrlBasedCorsConfigurationSource().also {
                it.registerCorsConfiguration("/**",
                        CorsConfiguration().apply {
                            allowCredentials = true
                            allowedHeaders = listOf("Authorization", "Content-Type")
                            allowedOrigins = listOf("*")
                            allowedMethods = listOf("*")
                        })
            }
}
