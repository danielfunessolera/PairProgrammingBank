package com.PairProgrammingBank.PairProgrammingBank.user;

import com.PairProgrammingBank.PairProgrammingBank.bankAccount.BankAccount;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Predicate;

@Component
public class UserDaoService {

    private static List<User> users = new ArrayList<>();
    private static int userCount = 0;
    private static List<BankAccount> bankAccounts = new ArrayList<>();


    static {
        bankAccounts.add(new BankAccount(1, "Cuenta Nómina", "La Caixa", 1000.20f));
        users.add(new User(++userCount, "Johnny", "macarroni", "Johnarroni", "1234asdF", bankAccounts) {
        });
    }

    public User save(User user){
        user.setId(++userCount);
        users.add(user);

        System.out.println(Arrays.toString(users.toArray()));
        return user;
    }

    public User findOne(Integer id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    public void update(Integer id, User updatedUser) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        User existingUser = users.stream().filter(predicate).findFirst().orElse(null);

        System.out.println("Existing user: " + existingUser.getFirstName());
        // for(User usuario : users) { System.out.println(usuario.getFirstName() + " " + usuario.getPhone()); }

        // Actualizar solo los campos que se proporcionan en el objeto actualizado
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

        System.out.println("Existing user: " + existingUser.getFirstName());
        // for(User usuario : users) { System.out.println(usuario.getFirstName() + " " + usuario.getPhone()); }

    }

}
