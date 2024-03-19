package com.example.AddProducts.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.AddProducts.model.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> { // sets the repository that is referenced.
}
