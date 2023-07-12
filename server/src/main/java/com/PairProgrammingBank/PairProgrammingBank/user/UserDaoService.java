package com.PairProgrammingBank.PairProgrammingBank.user;

import com.PairProgrammingBank.PairProgrammingBank.bankAccount.BankAccount;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Predicate;

@Component
public class UserDaoService {

    private static List<User> users = new ArrayList<>();
    private static int userCount = 0;

    static {
        users.add(new User(++userCount, "Johnny", "macarroni", "Johnarroni", "1234asdF", new List<BankAccount>({1, "Cuenta Nómina", "La Caixa", 1000.20f}) {
            @Override
            public int size() {
                return 0;
            }

            @Override
            public boolean isEmpty() {
                return false;
            }

            @Override
            public boolean contains(Object o) {
                return false;
            }

            @Override
            public Iterator<BankAccount> iterator() {
                return null;
            }

            @Override
            public Object[] toArray() {
                return new Object[0];
            }

            @Override
            public <T> T[] toArray(T[] a) {
                return null;
            }

            @Override
            public boolean add(BankAccount bankAccount) {
                return false;
            }

            @Override
            public boolean remove(Object o) {
                return false;
            }

            @Override
            public boolean containsAll(Collection<?> c) {
                return false;
            }

            @Override
            public boolean addAll(Collection<? extends BankAccount> c) {
                return false;
            }

            @Override
            public boolean addAll(int index, Collection<? extends BankAccount> c) {
                return false;
            }

            @Override
            public boolean removeAll(Collection<?> c) {
                return false;
            }

            @Override
            public boolean retainAll(Collection<?> c) {
                return false;
            }

            @Override
            public void clear() {

            }

            @Override
            public BankAccount get(int index) {
                return null;
            }

            @Override
            public BankAccount set(int index, BankAccount element) {
                return null;
            }

            @Override
            public void add(int index, BankAccount element) {

            }

            @Override
            public BankAccount remove(int index) {
                return null;
            }

            @Override
            public int indexOf(Object o) {
                return 0;
            }

            @Override
            public int lastIndexOf(Object o) {
                return 0;
            }

            @Override
            public ListIterator<BankAccount> listIterator() {
                return null;
            }

            @Override
            public ListIterator<BankAccount> listIterator(int index) {
                return null;
            }

            @Override
            public List<BankAccount> subList(int fromIndex, int toIndex) {
                return null;
            }
        }));
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
