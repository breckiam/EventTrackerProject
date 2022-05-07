package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.ThreeDPrint;
import com.skilldistillery.services.ThreeDPrintService;

@RestController
@RequestMapping("api")
public class ThreeDPrintController {

	@Autowired
	private ThreeDPrintService serv;
	
	@GetMapping("prints")
	public List<ThreeDPrint> index() {
		return serv.index();
	}
	
	@GetMapping("prints/{id}")
	public ThreeDPrint findPrintById(@PathVariable int id, HttpServletResponse resp) {
		ThreeDPrint print = serv.findById(id);
		if (print == null) {
			resp.setStatus(404);
		} 
		return print;
	}
	
	@PostMapping("prints")
	public ThreeDPrint addPrint(@RequestBody ThreeDPrint print, HttpServletResponse resp) {
		ThreeDPrint newPrint = serv.createPrint(print);
		if (newPrint == null) {
			resp.setStatus(201);
		}
		return newPrint;
	}
	
	@PutMapping("prints/{id}")
	public ThreeDPrint updatePrint(@RequestBody ThreeDPrint print,@PathVariable int id, HttpServletResponse resp) {
		ThreeDPrint upPrint = serv.updatePrint(id, print);
		if (upPrint == null) {
			resp.setStatus(400);
		}
		return upPrint;
	}
}
