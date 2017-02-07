package com.cs499.jhipsterapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A School.
 */
@Entity
@Table(name = "school")
public class School implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "school")
    @JsonIgnore
    private Set<Course> courses = new HashSet<>();

    @OneToOne
    @JoinColumn(unique = true)
    private Teacher teacher;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public School name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Course> getCourses() {
        return courses;
    }

    public School courses(Set<Course> courses) {
        this.courses = courses;
        return this;
    }

    public School addCourse(Course course) {
        courses.add(course);
        course.setSchool(this);
        return this;
    }

    public School removeCourse(Course course) {
        courses.remove(course);
        course.setSchool(null);
        return this;
    }

    public void setCourses(Set<Course> courses) {
        this.courses = courses;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public School teacher(Teacher teacher) {
        this.teacher = teacher;
        return this;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        School school = (School) o;
        if (school.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, school.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "School{" +
            "id=" + id +
            ", name='" + name + "'" +
            '}';
    }
}
