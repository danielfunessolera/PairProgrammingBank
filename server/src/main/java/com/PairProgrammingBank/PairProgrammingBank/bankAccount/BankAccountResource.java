package com.PairProgrammingBank.PairProgrammingBank.bankAccount;

import com.PairProgrammingBank.PairProgrammingBank.user.UserDaoService;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class BankAccountResource {
    private UserDaoService userService;
    private BankAccountDaoService service;

    public BankAccountResource(BankAccountDaoService service, UserDaoService userService) {
        this.service = service;
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @GetMapping("/users/{idUser}/bankaccount")
    public List<BankAccount> retrieveBankOfUser(@PathVariable String idUser) {
        List<BankAccount> Banks = userService.findOne(idUser).getBankAccounts();
        return Banks;
    }

    @CrossOrigin(origins = "http://localhost:5173/")
    @GetMapping("/users/{idUser}/savings/bankaccount")
    public String retrieveTotalSavings(@PathVariable String idUser) {
        Double total = retrieveBankOfUser(idUser).stream().mapToDouble(BankAccount::getSavings).reduce(0, (a, b) -> a+b);
        System.out.println(String.format("%.2f", total));
        return String.format("%.2f", total);
    }


    @CrossOrigin(origins = "http://localhost:5173/")
    @DeleteMapping("/users/{idUser}/bankaccount/{idAccount}")
    public List<BankAccount> deleteAccountById(@PathVariable String idUser, @PathVariable int idAccount) {
        List<BankAccount> Banks = userService.findOne(idUser).getBankAccounts();
        return service.deleteById(Banks,idAccount);
    }

//    @CrossOrigin(origins = "http://localhost:5173/")
//    @PostMapping("/users")
//    public void createUser (@RequestBody User user) {
//        User savedUser = service.save(user);
//        System.out.println(savedUser.getUserName());
//        System.out.println(savedUser.getLastName());
//        System.out.println(savedUser.getFirstName());
//    }

//    @CrossOrigin(origins = "http://localhost:5173/")
//    @PutMapping("/users/{id}")
//    public void updateUser (@PathVariable int id, @RequestBody User user) {
//        service.update(id, user);
//    }

}
