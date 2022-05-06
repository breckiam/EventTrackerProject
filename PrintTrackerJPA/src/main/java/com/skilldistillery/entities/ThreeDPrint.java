package com.skilldistillery.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="three_d_print")
public class ThreeDPrint {

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@Column(name="stl_file_url")
	private String stlFileUrl;
	
	@Column(name="custom_gcode_url")
	private String customGcodeUrl;
	
	@Column(name="printer_name")
	private String printerName;
	
	@Column(name="filament_type")
	private String filamentType;
	
	@Column(name="filament_brand")
	private String filamentBrand;
	
	@Column(name="print_temp")
	private Integer printTemp;
	
	@Column(name="print_speed")
	private Integer printSpeed;
	
	@Column(name="adhesion_layer")
	private String adhesionLayer;
	
	@Column(name="print_quality")
	private Double printQuality;
	
	private Boolean supports;
	
	@Column(name="print_img_url")
	private String printImgUrl;
	
	private Integer creates;
	
	@Column(name="last_date_created")
	private LocalDate lastDateCreated;
	
	
	public ThreeDPrint() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStlFileUrl() {
		return stlFileUrl;
	}

	public void setStlFileUrl(String stlFileUrl) {
		this.stlFileUrl = stlFileUrl;
	}

	public String getCustomGcodeUrl() {
		return customGcodeUrl;
	}

	public void setCustomGcodeUrl(String customGcodeUrl) {
		this.customGcodeUrl = customGcodeUrl;
	}

	public String getPrinterName() {
		return printerName;
	}

	public void setPrinterName(String printerName) {
		this.printerName = printerName;
	}

	public String getFilamentType() {
		return filamentType;
	}

	public void setFilamentType(String filamentType) {
		this.filamentType = filamentType;
	}

	public String getFilamentBrand() {
		return filamentBrand;
	}

	public void setFilamentBrand(String filamentBrand) {
		this.filamentBrand = filamentBrand;
	}

	public Integer getPrintTemp() {
		return printTemp;
	}

	public void setPrintTemp(Integer printTemp) {
		this.printTemp = printTemp;
	}

	public Integer getPrintSpeed() {
		return printSpeed;
	}

	public void setPrintSpeed(Integer printSpeed) {
		this.printSpeed = printSpeed;
	}

	public String getAdhesionLayer() {
		return adhesionLayer;
	}

	public void setAdhesionLayer(String adhesionLayer) {
		this.adhesionLayer = adhesionLayer;
	}

	public Double getPrintQuality() {
		return printQuality;
	}

	public void setPrintQuality(Double printQuality) {
		this.printQuality = printQuality;
	}

	public Boolean getSupports() {
		return supports;
	}

	public void setSupports(Boolean supports) {
		this.supports = supports;
	}

	public String getPrintImgUrl() {
		return printImgUrl;
	}

	public void setPrintImgUrl(String printImgUrl) {
		this.printImgUrl = printImgUrl;
	}

	public Integer getCreates() {
		return creates;
	}

	public void setCreates(Integer creates) {
		this.creates = creates;
	}

	public LocalDate getLastDateCreated() {
		return lastDateCreated;
	}

	public void setLastDateCreated(LocalDate lastDateCreated) {
		this.lastDateCreated = lastDateCreated;
	}

	@Override
	public String toString() {
		return "ThreeDPrint [id=" + id + ", name=" + name + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ThreeDPrint other = (ThreeDPrint) obj;
		return id == other.id;
	}
	
	
}
