package com.cs499.jhipsterapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Teacher.
 */
@Entity
@Table(name = "teacher")
public class Teacher implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "subject")
    private String subject;

    @OneToMany(mappedBy = "teacher")
    @JsonIgnore
    private Set<Course> courses = new HashSet<>();

    @OneToMany(mappedBy = "teacher")
    @JsonIgnore
    private Set<School> schools = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Teacher name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public Teacher subject(String subject) {
        this.subject = subject;
        return this;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Set<Course> getCourses() {
        return courses;
    }

    public Teacher courses(Set<Course> courses) {
        this.courses = courses;
        return this;
    }

    public Teacher addCourse(Course course) {
        courses.add(course);
        course.setTeacher(this);
        return this;
    }

    public Teacher removeCourse(Course course) {
        courses.remove(course);
        course.setTeacher(null);
        return this;
    }

    public void setCourses(Set<Course> courses) {
        this.courses = courses;
    }

    public Set<School> getSchools() {
        return schools;
    }

    public Teacher schools(Set<School> schools) {
        this.schools = schools;
        return this;
    }

    public Teacher addSchool(School school) {
        schools.add(school);
        school.setTeacher(this);
        return this;
    }

    public Teacher removeSchool(School school) {
        schools.remove(school);
        school.setTeacher(null);
        return this;
    }

    public void setSchools(Set<School> schools) {
        this.schools = schools;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Teacher teacher = (Teacher) o;
        if (teacher.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, teacher.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Teacher{" +
            "id=" + id +
            ", name='" + name + "'" +
            ", subject='" + subject + "'" +
            '}';
    }
}
