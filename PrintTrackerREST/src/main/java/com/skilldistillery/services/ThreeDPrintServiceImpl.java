package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

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
	
	@Override
	public List<ThreeDPrint> findByNameKeyword(String keyword) {
		return repo.findByNameLike(keyword);
	}

	@Override
	public ThreeDPrint findById(int id) {
		Optional<ThreeDPrint> op = repo.findById(id);
		ThreeDPrint print = null;
		if (op.isPresent()) {
			print = op.get();
		}
		return print;
	}

	@Override
	public ThreeDPrint updatePrint(int id, ThreeDPrint print) {
		if (print.getName() != null && print.getStlFileUrl() != null) {
			print.setId(id);
			return repo.save(print);
		}
		
		return null;
	}

	@Override
	public boolean deletePrint(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public ThreeDPrint createPrint(ThreeDPrint print) {
		if (print.getName() == null) {
			print.setName("Untitled 3D Print");
		} 
		if (print.getStlFileUrl() == null) {
			print.setStlFileUrl("https://www.thingiverse.com/");
		}
		return repo.saveAndFlush(print);
	}



}
