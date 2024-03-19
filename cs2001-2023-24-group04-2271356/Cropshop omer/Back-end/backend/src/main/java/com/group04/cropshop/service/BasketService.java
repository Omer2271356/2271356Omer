package com.group04.cropshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group04.cropshop.exception.ResourceNotFoundException;
import com.group04.cropshop.model.BasketItem;
import com.group04.cropshop.model.User;
import com.group04.cropshop.repository.BasketItemRepository;

@Service
public class BasketService {

    @Autowired
    BasketItemRepository basketItemRepository;

    public List<BasketItem> getBasketItemsByUser(User user){
        return basketItemRepository.findByUser(user);
    }

    public BasketItem saveBasketItem(BasketItem basketItem){
        return basketItemRepository.save(basketItem);
    }

    public void deleteBasketItem(Integer basketItemId){
        BasketItem basketItem = basketItemRepository.findById(basketItemId).orElseThrow(() -> new ResourceNotFoundException("BasketItem", "id", basketItemId));
        basketItemRepository.delete(basketItem);
    }
}
