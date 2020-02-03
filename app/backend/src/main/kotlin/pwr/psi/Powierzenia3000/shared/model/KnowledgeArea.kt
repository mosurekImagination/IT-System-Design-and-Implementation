package pwr.psi.Powierzenia3000.shared.model

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

@Entity
data class KnowledgeArea(
        @Id @GeneratedValue
        val id: Long = 0,
        val name: String = "",
        @ManyToMany
        @JsonIgnore
        val lecturers: Set<Lecturer> = setOf()
){

        override fun toString(): String {
                return "KnowledgeArea(id=$id, name='$name')"
        }

        override fun equals(other: Any?): Boolean {
                if (this === other) return true
                if (javaClass != other?.javaClass) return false

                other as KnowledgeArea

                if (id != other.id) return false
                if (name != other.name) return false

                return true
        }

        override fun hashCode(): Int {
                var result = id.hashCode()
                result = 31 * result + name.hashCode()
                return result
        }


}