package com.skilldistillery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

import com.skilldistillery.entities.ThreeDPrint;

public interface ThreeDPrintRepository extends JpaRepository<ThreeDPrint, Integer> {

	List<ThreeDPrint> findByName( String keyword);
}
