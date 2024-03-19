package com.group04.cropshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.group04.cropshop.model.User;


public interface UserRepository extends CrudRepository<User,Integer>{
	User findByEmail(String email);
}

