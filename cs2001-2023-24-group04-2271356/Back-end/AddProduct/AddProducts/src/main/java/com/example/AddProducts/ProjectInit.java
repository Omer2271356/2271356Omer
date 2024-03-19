package com.example.AddProducts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.AddProducts.model.Product;
import com.example.AddProducts.repository.ProductRepository;

@Component
public class ProjectInit implements CommandLineRunner { 
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public void run(String... args) throws Exception {
		productRepository.deleteAll();
		
		Product product1 = new Product("Roger's Bananas", "Yellow", 0.5f, 420); // adds a new product to test the SQL connection works. 
		productRepository.save(product1);
		
		Iterable<Product> prices= productRepository.findAll();
		prices.forEach((p)->{ // for each product, print it out
			System.out.println(p);
		});
	}
}
