package com.group04.cropshop.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.math.BigDecimal;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;


@Entity
@Table(name = "product_sale")
@EntityListeners(AuditingEntityListener.class)
public class ProductSale implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_sale_id")
	Integer id;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	Product produce;

	@ManyToOne
	@JoinColumn(name = "user_id")
	User seller;

	BigDecimal price;
	 
	public ProductSale() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductSale(Product produce, User seller, BigDecimal price) {
		this.produce = produce;
		this.seller = seller;
		this.price = price;
	}

	public Product getProduce() {
		return produce;
	}

	public void setProduce(Product produce) {
		this.produce = produce;
	}

	public User getSeller() {
		return seller;
	}

	public void setSeller(User seller) {
		this.seller = seller;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	@Override
public String toString() {
    return "ProductSale{" +
            "id=" + id +
            ", produce=" + produce.getName() + " (ID: " + produce.getId() + ")" +
            ", seller=" + seller.getName() + " (ID: " + seller.getId() + ")" +
            ", price=" + price +
            '}';


	}
	 
	
	 

}
