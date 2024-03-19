package com.example.AddProduct;

import java.sql.Blob;

public class Products {
	private String name;
	private String description;
	private String cost;
	private Integer quantity;
	private Blob image;
	
	public String getName() {
		return name;
	}
	
	public void setName(String newName) {
		this.name = newName;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String newDescription) {
		this.description = newDescription;
	}
	
	public String getCost() {
		return cost;
	}
	
	public void setCost(String newCost) {
		this.cost = newCost;
	}
	
	public Integer getQuantity() {
		return quantity;
	}
	
	public void setQuantity(Integer newQuantity) {
		this.quantity = newQuantity;
	}
	
	public Blob getImage() {
		return image;
	}
	
	public void setImage(Blob newImage) {
		this.image = newImage;
	}

}
