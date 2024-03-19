package com.group04.cropshop;

import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.group04.cropshop.model.*;
import com.group04.cropshop.repository.*;


@Component
public class ProjectInit implements CommandLineRunner{
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductSaleRepository productSaleRepository;

	@Override
	 public void run(String... args) throws Exception {
		
		// BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		// User user = new User("alex", "alex@sample.com", encoder.encode("alex_pass"), UserType.SELLER);
		// userRepository.save(user);
		
		Product newProduct = new Product("Apple"); 
		
		productRepository.save(newProduct);
		

		User user = userRepository.findByEmail("alex@sample.com");
		ProductSale newPSPrice = new ProductSale();
		newPSPrice.setProduce(newProduct);
		newPSPrice.setSeller(user);
		newPSPrice.setPrice(new BigDecimal(1));
		productSaleRepository.save(newPSPrice);
		
		Iterable<ProductSale> prices= productSaleRepository.findAll();
		prices.forEach((p)->{
			System.out.println(p);
		});
		
		
	}
}
