package com.PairProgrammingBank.PairProgrammingBank.user;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserResource {

    private UserDaoService service;

    public UserResource(UserDaoService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @GetMapping("/users/{id}")
    public User retrieveUser(@PathVariable int id) {
        User user = service.findOne(id);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @PostMapping("/users")
    public void createUser (@RequestBody User user) {
        User savedUser = service.save(user);
        System.out.println(savedUser.getUserName());
        System.out.println(savedUser.getLastName());
        System.out.println(savedUser.getFirstName());
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @PutMapping("/users/{id}")
    public void updateUser (@PathVariable int id, @RequestBody User user) {
        service.update(id, user);
    }


}
