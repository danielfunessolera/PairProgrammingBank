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

    public List<BankAccount> saveBankAccount (BankAccount account) {
        account.setId(++bankCount);
        accounts.add(account);
        return accounts;
    }

    public List<BankAccount> deleteById (List<BankAccount> accounts, Integer id) {
        Predicate<? super BankAccount> predicate = account -> account.getId().equals(id);
        accounts.removeIf(predicate);
        return accounts;
    }
    // public List<BankAccount> addBankAccount(String id, BankAccount bankAccount){
    //     List<BankAccount> Banks = this.findOne(id).getBankAccounts();
    //     Banks.add(Banks.size(), bankAccount);
    //     Banks.get(Banks.size()-1).setBankName(bankAccount.getBankName());
    //     System.out.println(Banks.get(Banks.size()-1).getBankName());
    //     System.out.println(bankAccount.getAccountName());
    //     return Banks;
    // }
}


