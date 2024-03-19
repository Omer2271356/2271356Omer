package com.group04.cropshop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group04.cropshop.exception.ResourceNotFoundException;
import com.group04.cropshop.model.Product;
import com.group04.cropshop.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", id));
    }

    public Product createProduct(Product product) {
        // Example: Add validation for required fields
        if (StringUtils.isBlank(product.getName()) || product.getPrice() <= 0) {
            throw new IllegalArgumentException("Name and price are required for creating a product");
        }

        return productRepository.save(product);
    }

    public Product updateProduct(Integer id, Product productDetails) {
        Product product = getProductById(id);

        // Example: Add validation for fields that should not be updated
        if (productDetails.getPrice() != null) {
            product.setPrice(productDetails.getPrice());
        }

        // Update other fields as needed

        return productRepository.save(product);
    }

    public void deleteProduct(Integer id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }
}

    public void deleteProduct(Integer id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }
}