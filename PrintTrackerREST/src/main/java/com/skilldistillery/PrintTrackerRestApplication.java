package com.skilldistillery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PrintTrackerRestApplication  extends SpringBootServletInitializer{
	
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(PrintTrackerRestApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(PrintTrackerRestApplication.class, args);
		
	}

}
