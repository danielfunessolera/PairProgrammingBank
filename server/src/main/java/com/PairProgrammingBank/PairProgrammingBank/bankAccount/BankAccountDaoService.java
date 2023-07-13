package com.PairProgrammingBank.PairProgrammingBank.bankAccount;

import com.PairProgrammingBank.PairProgrammingBank.user.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class BankAccountDaoService {

    private static List<BankAccount> accounts = new ArrayList<>();
    private static int bankCount = 0;

    static {
        accounts.add(new BankAccount (++bankCount, "Cuenta Nómina", "La Caixa", 1000.00f  ));
    }

    public BankAccount save (BankAccount account) {
        account.setId(++bankCount);
        accounts.add(account);
        return account;
    }

    public List<BankAccount> deleteById (List<BankAccount> accounts, Integer id) {
        Predicate<? super BankAccount> predicate = account -> account.getId().equals(id);
        accounts.removeIf(predicate);
        return accounts;
    }

}


