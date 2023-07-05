package com.PairProgrammingBank.PairProgrammingBank.user;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

@Component
public class UserDaoService {

    private static List<User> users = new ArrayList<>();
    private static int userCount = 0;

    static {
        users.add(new User(++userCount, "Johnny", "macarroni", "Johnarroni", "1234asdF"));
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
        //Predicate<? super User> predicate = user -> user.getId().equals(id);
        //User userToUpdate =  users.stream().filter(predicate).findFirst().orElse(null);
        // userToUpdate.setEmail("@testemail");
        //userToUpdate.setFirstName("cambio mi nombre");
        //userToUpdate.setLastName("cambio mi apellido");
        //userToUpdate.setPhone("cambio mi telefono");
        //users.

        Predicate<? super User> predicate = user -> user.getId().equals(id);
        User existingUser = users.stream().filter(predicate).findFirst().orElse(null);


        System.out.println(updatedUser.getUserName());

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

        System.out.println(updatedUser.getUserName());
        System.out.println(updatedUser.getPhone());
    }

}
