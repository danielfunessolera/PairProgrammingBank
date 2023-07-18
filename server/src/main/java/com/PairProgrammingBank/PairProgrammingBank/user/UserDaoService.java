package com.PairProgrammingBank.PairProgrammingBank.user;

import com.PairProgrammingBank.PairProgrammingBank.bankAccount.BankAccount;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Predicate;

@Component
public class UserDaoService {

    private static List<User> users = new ArrayList<>();
    private static List<BankAccount> bankAccounts = new ArrayList<>();


    static {
        bankAccounts.add(new BankAccount("1", "Cuenta Nómina", "La Caixa", 1000.20f));
        bankAccounts.add(new BankAccount("2", "Cuenta Corriente", "La Caja Rural", 1000.20f));
        users.add(new User(":rt:", "Johnny", "macarroni", "Johnarroni", "1234asdF", bankAccounts){}
        );
    }

    public User save(User user){
        users.add(user);

        System.out.println(Arrays.toString(users.toArray()));
        return user;
    }

    public User findOne(String id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    public void update(String id, User updatedUser) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        User existingUser = users.stream().filter(predicate).findFirst().orElse(null);

        System.out.println("Existing user: " + existingUser.getFirstName());

        if (updatedUser.getFirstName() != null) {
            existingUser.setFirstName(updatedUser.getFirstName());
        }
        if (updatedUser.getLastName() != null) {
            existingUser.setLastName(updatedUser.getLastName());
        }
        if (updatedUser.getEmail() != null) {
            existingUser.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getPhone() != null) {
            existingUser.setPhone(updatedUser.getPhone());
        }
    }

    public List<BankAccount> addBankAccount(String id, BankAccount bankAccount){
        List<BankAccount> Banks = this.findOne(id).getBankAccounts();
        Banks.add(Banks.size(), bankAccount);

        Banks.get(Banks.size()-1).setBankName(bankAccount.getBankName());
        System.out.println(Banks.get(Banks.size()-1).getBankName());
        System.out.println(bankAccount.getAccountName());
        return Banks;
    }

}
