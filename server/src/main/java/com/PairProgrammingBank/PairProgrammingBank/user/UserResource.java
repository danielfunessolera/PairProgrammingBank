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
    public User retrieveUser(@PathVariable String id) {
        User user = service.findOne(id);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @PostMapping("/users")
    public void createUser (@RequestBody User user) {
        service.save(user);
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @PutMapping("/users/{id}")
    public User updateUser (@PathVariable String id, @RequestBody User user) {
        service.update(id, user);
        return user;
    }


}
