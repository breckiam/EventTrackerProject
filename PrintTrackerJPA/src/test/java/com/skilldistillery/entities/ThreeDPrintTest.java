package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ThreeDPrintTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private ThreeDPrint print;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("PrintTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		print = em.find(ThreeDPrint.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		print = null;
	}
	

	@Test
	void test_THreeDPrint_basic_entity_mapping() {
		assertNotNull(print);
		assertEquals("Dino", print.getName());
		assertEquals("https://www.thingiverse.com/thing:913069", print.getStlFileUrl());
		assertEquals(0.20, print.getPrintQuality());
		assertEquals(false, print.getSupports());
	}

}
