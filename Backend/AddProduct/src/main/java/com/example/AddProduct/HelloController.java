package com.example.AddProduct;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ModelAttribute;






@RestController
@CrossOrigin("http://localhost:8080")
public class HelloController {
	
	@GetMapping("/addProduct")
	public String index(Model model) {
		model.addAttribute("product", new Products());
		return "addProduct";
	}
	
	@PostMapping("/addProduct")
	public String productEntry(@ModelAttribute("product") Products product) {
		System.out.println("Product Entry: " + product.getName() + ", " + product.getDescription() + ", " + product.getCost() + ", " + product.getQuantity() + ", " + product.getImage());
		return "redirect:/addProduct-success";
	}
	
	@GetMapping("/addProduct-worked")
	public String showWorked() {
		return "/addProduct-worked";
	}
	
	
}