package com.cs499.jhipsterapp.repository;

import com.cs499.jhipsterapp.domain.Teacher;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Teacher entity.
 */
@SuppressWarnings("unused")
public interface TeacherRepository extends JpaRepository<Teacher,Long> {

}
