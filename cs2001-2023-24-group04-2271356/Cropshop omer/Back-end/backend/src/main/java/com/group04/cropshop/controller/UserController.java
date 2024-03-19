package com.group04.cropshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.group04.cropshop.UserType;
import com.group04.cropshop.dto.UserPostDTO;
import com.group04.cropshop.model.User;
import com.group04.cropshop.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/user")
    public ResponseEntity<Optional<User>> addUser(@RequestBody UserPostDTO newUserDTO) {
        if (isInvalidUser(newUserDTO)) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User newUser = new User(newUserDTO.getName(), newUserDTO.getEmail(),
                encoder.encode(newUserDTO.getPassword()), newUserDTO.getUserType());

        userService.addUser(newUser);
        return new ResponseEntity<>(Optional.ofNullable(newUser), HttpStatus.CREATED);
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable(value = "id") Integer Id) {
        return userService.findById(Id);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable(value = "id") Integer Id) {
        userService.deleteUser(Id);
        return "User Deleted";
    }

    @GetMapping("/user/findByEmail")
    public Optional<User> getUserByEmail(@RequestParam String email) {
        return Optional.ofNullable(userService.findByEmail(email));
    }

    private boolean isInvalidUser(UserPostDTO userDTO) {
        return userDTO.getName() == null ||
               userDTO.getEmail() == null ||
               userDTO.getPassword() == null ||
               userDTO.getUserType() == UserType.NONE;
    }
}
