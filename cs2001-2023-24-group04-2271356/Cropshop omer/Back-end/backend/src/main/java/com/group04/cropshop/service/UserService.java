import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group04.cropshop.model.User;
import com.group04.cropshop.model.Product;
import com.group04.cropshop.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private List<CartItem> cartItems;

    public UserService() {
        cartItems = new ArrayList<>();
    }

    // Add a product to the cart
    public void addProductToCart(Product product, int quantity) {
        for (CartItem cartItem : cartItems) {
            if (cartItem.getProduct().equals(product)) {
                cartItem.setQuantity(cartItem.getQuantity() + quantity);
                return;
            }
        }

        cartItems.add(new CartItem(product, quantity));
    }

    // Remove a product from the cart
    public void removeProductFromCart(Product product) {
        cartItems.removeIf(cartItem -> cartItem.getProduct().equals(product));
    }

    // Get the cart items
    public List<CartItem> getCartItems() {
        return cartItems;
    }

    // Calculate the total price of the cart
    public double getTotalPrice() {
        double totalPrice = 0;
        for (CartItem cartItem : cartItems) {
            totalPrice += cartItem.getProduct().getPrice() * cartItem.getQuantity();
        }
        return totalPrice;
    }

    // Other methods related to user management (if needed)

    // Example: Get user by ID
    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + userId));
    }
}
