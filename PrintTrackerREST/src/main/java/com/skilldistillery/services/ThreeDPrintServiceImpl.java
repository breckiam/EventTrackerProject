package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.ThreeDPrint;
import com.skilldistillery.repository.ThreeDPrintRepository;

@Service
public class ThreeDPrintServiceImpl implements ThreeDPrintService {

	@Autowired
	private ThreeDPrintRepository repo;
	
	@Override
	public List<ThreeDPrint> index() {
		return repo.findAll();
	}

}
