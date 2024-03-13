package com.example.AddProducts.model;

public class ProductDTO {
	String productName;
	String productDesc;
	float productCost;
	int productQuantity;
	
	public ProductDTO(String productName, String productDesc, float productCost, int productQuantity) { // ProductDTO is used when the product is sent to the backend to be stored in the repository
		super();
		this.productName = productName;
		this.productDesc = productDesc;
		this.productCost = productCost;
		this.productQuantity = productQuantity;
		
	}
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public float getProductCost() {
		return productCost;
	}
	public void setProductCost(float productCost) {
		this.productCost = productCost;
	}
	public int getProductQuantity() {
		return productQuantity;
	}
	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

}
