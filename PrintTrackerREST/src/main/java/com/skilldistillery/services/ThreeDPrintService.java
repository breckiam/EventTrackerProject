package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.ThreeDPrint;


public interface ThreeDPrintService {
	List<ThreeDPrint> index();
	ThreeDPrint findById(int id);
	ThreeDPrint updatePrint(int id, ThreeDPrint print);
	boolean deletePrint(int id); 
	ThreeDPrint createPrint(ThreeDPrint print);
	
}
