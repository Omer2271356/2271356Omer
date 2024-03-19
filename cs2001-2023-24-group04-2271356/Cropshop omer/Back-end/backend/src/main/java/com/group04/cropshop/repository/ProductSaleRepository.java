package com.group04.cropshop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.group04.cropshop.model.ProductSale;
import com.group04.cropshop.model.User;

public interface ProductSaleRepository extends CrudRepository<ProductSale,Integer>{
	 List<ProductSale> deleteBySeller(User seller);
}
