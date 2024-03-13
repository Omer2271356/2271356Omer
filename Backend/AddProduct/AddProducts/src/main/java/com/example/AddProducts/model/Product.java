package com.example.AddProducts.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "products") // sets the table name for the database. 
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // will auto make the ID for each product that is added to the table
	@Column(name="p_id", length =5, nullable =false)
	private int productId; 
	@Column(name="p_name", length =20, nullable =false)
	private String productName;
	@Column(name="p_desc", length =140, nullable =false)
	private String productDesc;
	@Column(name="p_cost", length =4, nullable =false)
	private float productCost;
	@Column(name="p_quantity", length =3, nullable =false)
	private int productQuantity;
	
	public Product() {
		super();
	}
	
	public Product(String productName, String productDesc, float productCost, int productQuantity) { // creates a new product with private attributes
		super();
		this.productName = productName;
		this.productDesc = productDesc;
		this.productCost = productCost;
		this.productQuantity = productQuantity;
	}
	public int getProductId() { //ID is only needed to be got, as it will auto be set.
		return productId;
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
