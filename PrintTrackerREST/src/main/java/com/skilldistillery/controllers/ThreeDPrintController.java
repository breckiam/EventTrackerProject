package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.ThreeDPrint;
import com.skilldistillery.services.ThreeDPrintService;

@RestController
@RequestMapping("api")
public class ThreeDPrintController {

	@Autowired
	private ThreeDPrintService serv;
	
	@GetMapping("index")
	public List<ThreeDPrint> index() {
		return serv.index();
	}
}
