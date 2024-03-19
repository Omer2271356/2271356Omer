import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private List<Product> products = new ArrayList<>();

    public ProductController() {
        // Initialize products with the data from the HTML code
        products.add(new Product("Organic Tomatoes", "John Doe", "Tomato.jpeg", "Locally grown, pesticide-free tomatoes.", new BigDecimal("2.99"), 1, 5, UUID.randomUUID().toString()));
        // Add other products here
    }

    @GetMapping
    public List<Product> getProducts() {
        return products;
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<Product> addToCart(@RequestBody CartItem cartItem) {
        Product product = products.stream()
                .filter(p -> p.getId().equals(cartItem.getProduct().getId()))
                .findFirst()
                .orElse(null);

        if (product != null) {
            if (cartItem.getQuantity() >= product.getMinQuantity() && cartItem.getQuantity() <= product.getMaxQuantity()) {
                // Add the product to the cart (e.g., in a session or database)
                // Return the updated product
                return new ResponseEntity<>(product, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
