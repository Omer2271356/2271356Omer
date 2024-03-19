package com.example.AddProducts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.AddProducts.model.Product;
import com.example.AddProducts.model.ProductDTO;
import com.example.AddProducts.repository.ProductRepository;

@RestController
@RequestMapping
public class HelloController {
	@Autowired
	private ProductRepository productRepository; // need a product repository to deal with data when it is taken (the database)
	
	@GetMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}
	
	@GetMapping("/get-products") 
	public List<Product> listProducts() { // for each product that is in the database, is added to a list that is returned. 
		// model.addAttribute ("products", productRepository.listAllProducts());
		return (List<Product>) productRepository.findAll(); // find all products in the repository 
	}
	
	@PostMapping("/post-products") 
	public String storeProduct(@RequestBody ProductDTO productDTO) { // states a new object productDTO needs to be made that is filled with the values from frontend
		Product product_store = new Product(productDTO.getProductName(), productDTO.getProductDesc(), productDTO.getProductCost(), productDTO.getProductQuantity());
		productRepository.save(product_store); // the product needs to be put into the database once it has all the necessary values. 
		return "";
	}

}
